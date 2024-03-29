import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faBell, faBookBookmark, faChartColumn, faChartLine, faCircleExclamation, faCommentDots, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from 'src/app/models/user-info';
import { InfomationService } from 'src/app/service/infomation.service';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit{
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

  userInfo = {} as UserInfo;
 
  constructor(
    private informationService: InfomationService
  ) {}

  ngOnInit(): void {
    this.informationService.getInformation("student").subscribe(s => {
      this.userInfo = s;
    });
  }
}
