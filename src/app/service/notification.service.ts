import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(userName: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`http://localhost:5043/Notification/${userName}`);
  }

  sendNotification(receiver: string, notification: Notification): Observable<Notification[]> {
    return this.http.post<Notification[]>(`http://localhost:5043/Notification/${receiver}`, notification);
  }
}
