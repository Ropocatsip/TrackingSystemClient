import { Component, OnInit, TemplateRef } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject } from '../models/subject';

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
    this.getCourseById();
  }

  onClickAddSubject() {
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.action.subscribe((isConfirm: boolean) => {
      if (isConfirm) {
       this.modalRef.content.subject.subscribe((subject: Subject) => {
         this.courseService.updateSubjectCourseById(this.courseId, subject).subscribe({
           next: () => {},
           error: (er) => {
             alert(er.error);
           },
           complete: () => {
             this.getCourseById();
           }
         });
       });
      }
    });
  }

  onClickDelete(subjectId: number) {
    this.courseService.deleteSubjectCourseById(this.course.courseId, subjectId).subscribe({
      next: () => {},
      error: (er) => {
        alert(er.error);
      },
      complete: () => {
        this.getCourseById();
      }
    });
  }

  getCourseById() {
    this.courseService.getCourseById(this.courseId).subscribe(s => {
      this.course = s
    });
  }

}
