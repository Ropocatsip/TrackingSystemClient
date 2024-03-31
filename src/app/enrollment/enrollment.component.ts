import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit{

  studentInfo = {} as Student;

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) {
      this.studentService.getStudentInfo("student").subscribe(s => {
        this.studentInfo = s
      });
    }
  }

}
