import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../service/local-storage.service';
import { NotificationService } from '../service/notification.service';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  faXmark = faXmark;

  notifications = [] as Notification[];

  constructor(
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) {
      this.notificationService.getNotifications(userName).subscribe({
        next: (result) => {
          this.notifications = result;
        },
        error: (er) => {
          alert(er.error);
        },
        complete: () => {
        }
      });
    }
  }
}
