import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:5043/Course`);
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:5043/Subject`);
  }

  getCourseById(courseId : string): Observable<Course> {
    return this.http.get<Course>(`http://localhost:5043/Course/${courseId}`);
  }

  deleteSubjectCourseById(courseId : string, subjectId: number): Observable<any> {
    return this.http.put<any>(`http://localhost:5043/Course/${courseId}/${subjectId}`, {});
  }

  updateSubjectCourseById(courseId : string, subject: Subject): Observable<any> {
    return this.http.put<any>(`http://localhost:5043/Course/${courseId}`, subject);
  }
}
