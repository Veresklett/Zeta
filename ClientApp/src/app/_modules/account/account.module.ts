import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})

export class AccountModule {
}
