import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';
import { ThesisComponent } from './thesis/thesis.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { ThesisCatalogComponent } from './thesis-catalog/thesis-catalog.component';
import { ReportComponent } from './report/report.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { CourseSettingComponent } from './course-setting/course-setting.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SubjectAddingComponent } from './subject-adding/subject-adding.component';

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
  },
  {
    path: 'advisory',
    component: AdvisoryComponent
  },
  {
    path: 'thesis-catalog',
    component: ThesisCatalogComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'send-notification',
    component: SendNotificationComponent
  },
  {
    path: 'course-setting',
    component: CourseSettingComponent
  },
  {
    path: 'course-detail',
    component: CourseDetailComponent
  },
  {
    path: 'subject',
    component: SubjectAddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
