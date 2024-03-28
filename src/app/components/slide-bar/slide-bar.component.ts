import { Component } from '@angular/core';
import { faArrowRightFromBracket, faBell, faBookBookmark, faChartColumn, faChartLine, faCircleExclamation, faCommentDots, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent {
  faXmark = faXmark;
  faInfo = faUser;
  faNoti = faCircleExclamation;
  faEnrollment = faGraduationCap;
  faThesis = faBookBookmark;
  faDashboard = faChartLine;
  faLogOut = faArrowRightFromBracket;
  faBell = faBell;
  faReport = faChartColumn;
  faSendNoti = faCommentDots;
}
