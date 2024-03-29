import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit{

  studentInfo = {} as Student;

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudentInfo("student").subscribe(s => {
      this.studentInfo = s
    });
  }

}
