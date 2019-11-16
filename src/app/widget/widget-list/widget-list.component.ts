import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';
import { WidgetType } from 'src/app/models/widget.type';
import { WidgetService } from 'src/app/services/widget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'isPublished', 'actions'];

  selected = 0;
  widgetTypes = WidgetType;
  dataSource: Widget[];
  constructor(private widgetService: WidgetService,
              private router: Router) { }

  ngOnInit() {
    this.widgetService.getAll().subscribe(res => this.dataSource = res);
  }

  edit(id) {
    this.router.navigate([`/backoffice/editHtmlWidget/${id}`]);
  }

  addWidget() {
    if (this.selected == WidgetType.Html) {
      this.router.navigate(['/backoffice/addHtmlWidget']);
    } else if (this.selected == WidgetType.Product) {
      this.router.navigate(['/backoffice/addProductWidget']);
    } else {
      this.router.navigate(['/backoffice/addHtmlWidget']);
    }
  }
}
