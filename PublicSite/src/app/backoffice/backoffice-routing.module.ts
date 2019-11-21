import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { NavbarListComponent } from '../navbar/components/navbar-list/navbar-list.component';
import { WidgetListComponent } from '../widget/widget-list/widget-list.component';
import { AddNavbarComponent } from '../navbar/components/add-navbar/add-navbar.component';
import { WidgetHtmlComponent } from '../widget/widget-html/widget-html.component';
import { WidgetProductComponent } from '../widget/widget-product/widget-product.component';

const routes: Routes = [
  {
    path: 'backoffice', component: BackofficeComponent, children: [
      { path: 'navbars', component: NavbarListComponent },
      { path: 'addnavbar', component: AddNavbarComponent },
      { path: 'editnavbar/:id', component: AddNavbarComponent },
      { path: 'widgets', component: WidgetListComponent },
      { path: 'addHtmlWidget', component: WidgetHtmlComponent },
      { path: 'editHtmlWidget/:id', component: WidgetHtmlComponent },
      { path: 'addProductWidget', component: WidgetProductComponent },
      { path: 'editProductWidget/:id', component: WidgetProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
