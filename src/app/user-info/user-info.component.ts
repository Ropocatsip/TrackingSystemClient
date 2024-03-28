import { Component, OnInit } from '@angular/core';
import { faBookBookmark, faChartLine, faCircleExclamation, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { InfomationService } from '../service/infomation.service';
import { Student } from '../models/student';
import { UserInfo } from '../models/user-info';
import { StudentService } from '../service/student.service';

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
  userName = "student";
  constructor(
    private informationService: InfomationService,
    private studentService: StudentService
  )
  {}

  ngOnInit(): void {
    this.informationService.getInformation(this.userName).subscribe( s => {
      this.userInfo = s;
    });

    if (this.userName = "student") {
      this.studentService.getStudentInfo(this.userName).subscribe( s => {
        this.student = s
      })
    }
  }
}
