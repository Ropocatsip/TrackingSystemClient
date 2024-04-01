import { Component, OnInit, TemplateRef } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course = {} as Course;
  courseId = "";
  modalRef = {} as BsModalRef;
  
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {
    this.courseId = activatedRoute.snapshot.params['courseId']
  }

  ngOnInit(): void {
    this.courseService.getCourseById(this.courseId).subscribe(s => {
      this.course = s
    });
  }

  onClickAddSubject() {
    this.modalRef = this.modalService.show(ModalComponent);
  }

}
