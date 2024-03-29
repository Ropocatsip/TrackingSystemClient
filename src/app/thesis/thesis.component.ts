import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';

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
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudentInfo("student").subscribe( s => {
      this.student = s
    })
  }
}
