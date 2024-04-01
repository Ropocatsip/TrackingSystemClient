import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  constructor(
    private modalRef: BsModalRef
  ) {}

  cancel() {
    this.modalRef.hide();
  }
}
