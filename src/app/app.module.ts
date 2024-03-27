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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TwoFAComponent,
    UserInfoComponent,
    NotificationComponent,
    EnrollmentComponent,
    ThesisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
