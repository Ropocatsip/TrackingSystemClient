import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faBell, faBookBookmark, faChartColumn, faChartLine, faCircleExclamation, faCommentDots, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from 'src/app/models/user-info';
import { InfomationService } from 'src/app/service/infomation.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

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
    private informationService: InfomationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) {
      this.informationService.getInformation(userName).subscribe(s => {
        this.userInfo = s;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  onClickLogOut() {
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  }
}
