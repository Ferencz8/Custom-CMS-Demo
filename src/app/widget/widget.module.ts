import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { SharedMaterialModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';

@NgModule({
  declarations: [WidgetListComponent, WidgetHtmlComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    // WidgetRoutingModule
  ]
})
export class WidgetModule { }
