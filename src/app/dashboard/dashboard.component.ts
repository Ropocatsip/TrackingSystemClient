import { Component } from '@angular/core';
import { faArrowRightFromBracket, faBookBookmark, faChartLine, faCircleExclamation, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faXmark = faXmark;
  faInfo = faUser;
  faNoti = faCircleExclamation;
  faEnrollment = faGraduationCap;
  faThesis = faBookBookmark;
  faDashboard = faChartLine;
  faLogOut = faArrowRightFromBracket;

}
