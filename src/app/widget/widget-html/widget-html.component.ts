import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable, of } from 'rxjs';
import { Widget } from 'src/app/models/widget';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service';
import { map } from 'rxjs/operators';
import { AppSettings } from 'src/app/shared/app.settings';
import { WidgetType } from 'src/app/models/widget.type';
@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.scss']
})
export class WidgetHtmlComponent implements OnInit {
  isEdit = false;
  widget$: Observable<Widget>;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: `${AppSettings.API_ENDPOINT}/widget/UploadFile`,
    sanitize: true,
    toolbarPosition: 'top',
};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) { }

  ngOnInit() {
    const widget = new Widget();
    widget.widgettype = WidgetType.Html;
    this.widget$ = of(widget);

    if (this.router.url.includes('edit')) {
      this.isEdit = true;
      this.route.params.subscribe(params => {
        const idParam = params.id;
        this.widgetService.get(idParam).subscribe(res => {
          this.widget$ = of(res);
        });
      });
      this.route.paramMap.pipe(
        map((params: ParamMap) => {
          this.widgetService.get(params.get('id')).subscribe(res => {
            this.widget$ = of(res);
          });
        })
      );
    }
  }

  save(widget: Widget) {
    console.log(widget);
    if (this.isEdit) {
      this.widgetService.update(widget).subscribe(() => {
        this.router.navigate(['../backoffice/widgets']);
      });
    } else {
      this.widgetService.add(widget).subscribe(() => {
        this.router.navigate(['../backoffice/widgets']);
      });
    }
  }

  cancel() {
    this.router.navigate(['../backoffice/widgets']);
  }
}
