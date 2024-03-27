import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';
import { ThesisComponent } from './thesis/thesis.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationComponent
  },
  {
    path: 'info',
    component: UserInfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'thesis-advisor',
    component: ThesisComponent
  },
  {
    path: 'enrollment',
    component: EnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
