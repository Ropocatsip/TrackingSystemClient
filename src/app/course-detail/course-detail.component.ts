import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course = {} as Course;
  courseId = "";

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {
    this.courseId = activatedRoute.snapshot.params['courseId']
  }

  ngOnInit(): void {
    this.courseService.getCourseById(this.courseId).subscribe(s => {
      this.course = s
    });
  }

}
