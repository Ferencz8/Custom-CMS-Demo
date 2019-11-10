import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicsiteComponent } from './publicsite.component';
import { PublicsiteRoutingModule } from './publicsite-routing.module';

@NgModule({
  declarations: [PublicsiteComponent],
  imports: [
    CommonModule,
    PublicsiteRoutingModule
  ]
})
export class PublicsiteModule { }
