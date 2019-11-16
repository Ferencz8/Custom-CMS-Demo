import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { SharedMaterialModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';
import { RouterModule } from '@angular/router';
import { WidgetProductComponent } from './widget-product/widget-product.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [WidgetListComponent, WidgetHtmlComponent, WidgetProductComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    HttpClientModule,
    NgxFileDropModule,
    RouterModule
  ]
})
export class WidgetModule { }
