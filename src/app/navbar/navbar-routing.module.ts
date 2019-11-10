import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNavbarComponent } from './components/add-navbar/add-navbar.component';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';

const navbarRoutes: Routes = [
  { path: 'navbars',  component: NavbarListComponent },
  { path: 'addnavbar', component: AddNavbarComponent },
  { path: 'editnavbar/:id', component: AddNavbarComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(navbarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavbarRoutingModule { }
