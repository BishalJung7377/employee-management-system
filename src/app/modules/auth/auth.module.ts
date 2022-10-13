import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent,
  ],
  imports: [CommonModule,SharedModule,RouterModule],
  providers: [
  ]
})
export class AuthModule { }
