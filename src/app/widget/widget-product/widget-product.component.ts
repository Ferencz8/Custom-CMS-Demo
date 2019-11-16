import { Component, OnInit } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Widget } from 'src/app/models/widget';
import { Observable, of } from 'rxjs';
import { WidgetService } from 'src/app/services/widget.service';
import { WidgetType } from 'src/app/models/widget.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-product',
  templateUrl: './widget-product.component.html',
  styleUrls: ['./widget-product.component.scss']
})
export class WidgetProductComponent implements OnInit {

  isEdit = false;
  productWidget: Widget;
  link: string;
  description: string;
  imgUrl: string;
  imgFile: File;
  acceptedFileExtensions = 'jpg,jpeg,png';

  constructor(
    private router: Router,
    private widgetService: WidgetService) { }

  ngOnInit() {
    this.productWidget = new Widget();

  }

  public dropped(files: NgxFileDropEntry[]) {

    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.imgFile = file;
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          const reader = new FileReader();

          reader.onload = (event: any) => {
            this.imgUrl = event.target.result;
          };

          reader.onerror = (event: any) => {
            console.log("File could not be read: " + event.target.error.code);
          };

          reader.readAsDataURL(file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  save() {
    if (this.imgFile) {
      this.widgetService.upload(this.imgFile).subscribe((res: any) => {

        let serverImgUrl = '';
        if (!!res && !!res.imgUrl) {
          serverImgUrl = res.imgUrl;
        }
        this.productWidget.content = JSON.stringify({
          imageUrl: serverImgUrl,
          description: this.description,
          link: this.link
        });
        this.productWidget.widgettype = WidgetType.Product;

        this.widgetService.add(this.productWidget).subscribe(res2 =>
          this.router.navigate(['../backoffice/widgets'])
        );
      });
    }
  }

  cancel() {
    this.router.navigate(['../backoffice/widgets']);
  }
}
