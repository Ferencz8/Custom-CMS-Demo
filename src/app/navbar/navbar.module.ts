import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared.module';
import { AddNavbarComponent } from './components/add-navbar/add-navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    // NavbarRoutingModule
  ],
  declarations: [
    NavbarListComponent,
    AddNavbarComponent
  ],
  exports: [
    NavbarListComponent
  ]
})
export class NavbarModule { }
