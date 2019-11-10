import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';


const widgetRoutes: Routes = [
  { path: 'widgets',  component: WidgetListComponent },
  { path: 'widget-html',  component: WidgetHtmlComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(widgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WidgetRoutingModule { }
