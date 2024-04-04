import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';
import { Thesis } from '../models/thesis';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentInfo(userName: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:5043/Student/${userName}`);
  }

  updateThesis(userName: string, thesis: Thesis): Observable<any> {
    return this.http.put<any>(`http://localhost:5043/Student/${userName}`, thesis);
  }
}
