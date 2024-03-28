import { Component } from '@angular/core';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent {

  notificationType = [{
    code: 'info',
    description: 'Information'
  },{
    code: 'alert',
    description: 'Alert'
  }]

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
    code: 'all',
    description: 'ทุกคน'
  }]
}
