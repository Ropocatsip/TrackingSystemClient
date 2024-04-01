import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'src/app/models/subject';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  dayOption = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  timeOption = ["09:00 - 12:00", "13:00 - 16:00", "16:00 - 19:00"];

  @Output() action = new EventEmitter<boolean>();
  @Output() subject = new EventEmitter<Subject>();

  subjects = [] as Subject[];
  subjectId = 0;
  timeSelected = "";
  daySelected = "";
  course = {};

  constructor(
    private modalRef: BsModalRef,
    private courseService: CourseService
  ) {

  }

  ngOnInit(): void {
    this.courseService.getSubjects().subscribe(s => {
      this.subjects = s
    });

  }

  cancel() {
    this.action.emit(false);
    this.modalRef.hide();
  }

  confirm() {
    let subjectDetail = {
      subjectId: this.subjectId,
      name: this.subjects.find(f => f.subjectId == this.subjectId)?.name,
      schedule: this.daySelected + " " + this.timeSelected
    } as Subject;

    this.action.emit(true);
    this.subject.emit(subjectDetail);
    this.modalRef.hide();
  }
}
