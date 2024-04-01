import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-setting',
  templateUrl: './course-setting.component.html',
  styleUrls: ['./course-setting.component.css']
})
export class CourseSettingComponent implements OnInit {

  courses = [] as Course[];

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe( s => {
      this.courses = s
    });
  }

}
