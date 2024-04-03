import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  notificationType = [{
    code: 'Info',
    description: 'Information'
  },{
    code: 'Alert',
    description: 'Alert'
  }];

  receiverOption = [{
    code: 'student',
    description: 'นิสิต'
  },{
    code: 'advisor',
    description: 'อาจารย์'
  },{
    code: 'committee',
    description: 'Committee'
  },{
    code: 'everyone',
    description: 'ทุกคน'
  }];

  receiver = "";
  detail = "";
  type = "";

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
  
  }

  onClickSendNotification() {
    let notification = {
      type: this.type,
      detail: this.detail
    } as Notification;
    
    this.notificationService.sendNotification(this.receiver, notification).subscribe({
      next: (result) => {
      },
      error: (er) => {
        alert(er.error);
      },
      complete: () => {
        alert('ส่งข้อความสำเร็จ');
      }
    });
  }
}
