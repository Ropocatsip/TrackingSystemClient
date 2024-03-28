import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TwoFAComponent } from './two-fa/two-fa.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationComponent } from './notification/notification.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ThesisComponent } from './thesis/thesis.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { ThesisCatalogComponent } from './thesis-catalog/thesis-catalog.component';
import { ReportComponent } from './report/report.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { CourseSettingComponent } from './course-setting/course-setting.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SubjectAddingComponent } from './subject-adding/subject-adding.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TwoFAComponent,
    UserInfoComponent,
    NotificationComponent,
    EnrollmentComponent,
    ThesisComponent,
    SlideBarComponent,
    FooterComponent,
    AdvisoryComponent,
    ThesisCatalogComponent,
    ReportComponent,
    SendNotificationComponent,
    CourseSettingComponent,
    CourseDetailComponent,
    SubjectAddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
