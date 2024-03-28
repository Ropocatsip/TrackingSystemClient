import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class GetInfomationService {

  constructor(private http: HttpClient) { }

  getInformation(userName: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:5043/Student?userName=${userName}`);
  }
}
