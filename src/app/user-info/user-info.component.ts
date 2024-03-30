import { Component, OnInit } from '@angular/core';
import { faBookBookmark, faChartLine, faCircleExclamation, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { InfomationService } from '../service/infomation.service';
import { Student } from '../models/student';
import { UserInfo } from '../models/user-info';
import { StudentService } from '../service/student.service';
import { LocalStorageService } from '../service/local-storage.service';

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

  userInfo = {} as UserInfo;
  student = {} as Student;
  constructor(
    private informationService: InfomationService,
    private studentService: StudentService,
    private localStorageService: LocalStorageService
  )
  {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) {
      this.informationService.getInformation(userName).subscribe( s => {
        this.userInfo = s;
        if (this.userInfo.role == "student") {
          this.studentService.getStudentInfo(userName).subscribe( s => {
            this.student = s
          });
        }
      });
    }
  }

}
