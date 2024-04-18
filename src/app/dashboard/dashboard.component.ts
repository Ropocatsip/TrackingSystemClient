import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faBookBookmark, faChartLine, faCircleExclamation, faGraduationCap, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../service/student.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faXmark = faXmark;
  faInfo = faUser;
  faNoti = faCircleExclamation;
  faEnrollment = faGraduationCap;
  faThesis = faBookBookmark;
  faDashboard = faChartLine;
  faLogOut = faArrowRightFromBracket;

  students = [] as Student[];
  constructor ( 
    private studentService: StudentService,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) { 
      this.studentService.getStudentInfoByCommittee(userName).subscribe(s => {
        this.students = s;
        console.log(this.students);
        
      });
    }
  }

}
