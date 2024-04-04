import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';
import { LocalStorageService } from '../service/local-storage.service';
import { InfomationService } from '../service/infomation.service';
import { UserInfo } from '../models/user-info';
import { AdvisoryRequest } from '../models/advisory-request';
import { AdvisorService } from '../service/advisor.service';
import { Thesis } from '../models/thesis';

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
    let advisoryRequest = {
      thesisTopic:  this.topic,
      studentId: this.student.studentId
    } as AdvisoryRequest;
    this.advisorService.updateAdvisoryRequest(this.advisorUserName, this.studentUserName, advisoryRequest).subscribe({
      next:() => {},
      error:(err) => {
        alert(err.error);
      },
      complete:() => {
       this.updateThesis();
      }
    });
  }

  updateThesis() {
    const advisor = this.advisors.find(s => s.user.userName == this.advisorUserName);
    let thesis = {
      status: {
        statusId : 1,
        desc : "อยู่ระหว่างพิจารณา"
      },
      topic : this.topic,
      advisorInfo: {
        fullName: advisor?.title + " " + advisor?.name + " " + advisor?.lastName
      }
    } as Thesis;

    this.studentService.updateThesis(this.studentUserName, thesis).subscribe({
      next:() => {},
      error:(err) => {
        alert(err.error);
      },
      complete:() => {
        this.getStudentInfo(this.studentUserName);
        alert("ส่งคำขอให้อาจารย์ที่ปรึกษาสำเร็จ");
      }
    });
  }
}
