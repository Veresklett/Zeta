import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth-guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './_modules/home/home.module#HomeModule',
    pathMatch: 'full',
    canLoad: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: './_modules/account/account.module#AccountModule'
  },
  {
    path: 'home',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
