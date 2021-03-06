import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicsiteComponent } from './publicsite/publicsite.component';
import { BackofficeComponent } from './backoffice/backoffice.component';

const routes: Routes = [
  { path: '', component: BackofficeComponent },
 // { path: '/navbar', component: AppComponent, data: { tab: 'navbar' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
     { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
