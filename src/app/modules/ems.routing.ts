import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './employee-management-system/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component : DashboardComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMSRoutingModule { }
