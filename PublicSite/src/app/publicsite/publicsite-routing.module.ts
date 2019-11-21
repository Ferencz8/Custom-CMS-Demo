import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicsiteComponent } from './publicsite.component';

const routes: Routes = [
  { path: 'public', component: PublicsiteComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicsiteRoutingModule { }
