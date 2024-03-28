import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentInfo(userName: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:5043/Student/${userName}`);
  }
}
