import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  dayOption = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  timeOption = ["09:00 - 12:00", "13:00 - 16:00", "16:00 - 19:00"];

  @Output() action = new EventEmitter<boolean>();
  
  constructor(
    private modalRef: BsModalRef
  ) {}

  cancel() {
    this.action.emit(false);
    this.modalRef.hide();
  }

  confirm() {
    this.action.emit(true);
    this.modalRef.hide();
  }
}
