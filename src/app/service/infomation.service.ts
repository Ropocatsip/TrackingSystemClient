import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class InfomationService {

  constructor(private http: HttpClient) { }

  getInformation(userName: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`http://localhost:5043/Information/${userName}`);
  }

  getLoginResponse(userName: string, password: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`http://localhost:5043/Information/${userName}/${password}`);
  }
}
