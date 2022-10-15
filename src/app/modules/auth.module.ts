import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { DashboardComponent } from './employee-management-system/pages/dashboard/dashboard.component';
import { NavigationBarComponent } from './employee-management-system/shared/navigation-bar/navigation-bar.component';
import { DashboardContentComponent } from './employee-management-system/shared/dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent,
    SignUpComponent,
    DashboardComponent,
    NavigationBarComponent,
    DashboardContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ]
})
export class AuthModule { }
