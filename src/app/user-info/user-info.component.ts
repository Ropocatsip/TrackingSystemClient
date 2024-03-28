import { Component, OnInit } from '@angular/core';
import { faBookBookmark, faChartLine, faCircleExclamation, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { GetInfomationService } from '../service/get-infomation.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  faXmark = faXmark;
  faInfo = faUser;
  faNoti = faCircleExclamation;
  faEnrollment = faGraduationCap;
  faThesis = faBookBookmark;
  faDashboard = faChartLine;

  constructor(
    private getInformationService: GetInfomationService
  )
  {}

  ngOnInit(): void {
    this.getInformationService.getInformation("student").subscribe( s => {
      console.log(s);
    })
  }
}
