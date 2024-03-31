import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  advisorOption = [{
    code: 'aa',
    description: 'นาย ปป ปปปป'
  }]
  
  student = {} as Student;

  constructor(
    private studentService: StudentService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if(userName) {
      this.studentService.getStudentInfo(userName).subscribe( s => {
        this.student = s
      });
    }
  }
}
