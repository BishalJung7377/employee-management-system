import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
