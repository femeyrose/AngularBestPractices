import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./shared/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
