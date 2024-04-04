import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';
import { LocalStorageService } from '../service/local-storage.service';
import { InfomationService } from '../service/infomation.service';
import { UserInfo } from '../models/user-info';
import { AdvisoryRequest } from '../models/advisory-request';
import { AdvisorService } from '../service/advisor.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  student = {} as Student;
  advisors = [] as UserInfo[];

  advisorUserName = "";
  studentUserName = "";

  topic = "";

  constructor(
    private studentService: StudentService,
    private localStorageService: LocalStorageService,
    private informationService: InfomationService,
    private advisorService : AdvisorService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if(userName) {
      this.studentUserName = userName;
      this.getStudentInfo(userName);
      this.informationService.getAllUserByRole("advisor").subscribe( d => {
        this.advisors = d;
      });
    }
  }

  getStudentInfo(userName : string) {
    this.studentService.getStudentInfo(userName).subscribe( s => {
      this.student = s
    });
  }

  onClickAdvisorRequest() {
    let advisoryRequest = {} as AdvisoryRequest;

    advisoryRequest.thesisTopic = this.topic;
    advisoryRequest.studentId = this.student.studentId;
    this.advisorService.updateAdvisoryRequest(this.advisorUserName, this.studentUserName, advisoryRequest).subscribe({
      next:() => {},
      error:(err) => {
        alert(err.error);
      },
      complete:() => {
        this.getStudentInfo(this.studentUserName);
        alert("ส่งคำขอให้อาจารย์ที่ปรึกษาสำเร็จ");
      }
    })
  }
}
