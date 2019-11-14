import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { NavbarListComponent } from '../navbar/components/navbar-list/navbar-list.component';
import { WidgetListComponent } from '../widget/widget-list/widget-list.component';
import { AddNavbarComponent } from '../navbar/components/add-navbar/add-navbar.component';
import { WidgetHtmlComponent } from '../widget/widget-html/widget-html.component';

const routes: Routes = [
  {
    path: 'backoffice', component: BackofficeComponent, children: [
      {
        path: 'navbars', component: NavbarListComponent, children: [
          { path: 'addnavbar', component: AddNavbarComponent },
          { path: 'editnavbar/:id', component: AddNavbarComponent }
        ]
      },
      {
        path: 'widgets', component: WidgetListComponent, children: [
          { path: 'widget-html', component: WidgetHtmlComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
