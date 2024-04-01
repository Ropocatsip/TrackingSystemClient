import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:5043/Course`);
  }

  getCourseById(courseId : string): Observable<Course> {
    return this.http.get<Course>(`http://localhost:5043/Course/${courseId}`);
  }

  updateCourseById(courseId : string, subjectId: number): Observable<any> {
    return this.http.put<any>(`http://localhost:5043/Course/${courseId}/${subjectId}`, {});
  }
}
