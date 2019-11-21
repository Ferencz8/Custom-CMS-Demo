import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicsiteComponent } from './publicsite.component';
import { PublicsiteRoutingModule } from './publicsite-routing.module';
import { SafeHtmlPipe } from '../shared/safe.html.pipe';

@NgModule({
  declarations: [PublicsiteComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    PublicsiteRoutingModule
  ]
})
export class PublicsiteModule { }
