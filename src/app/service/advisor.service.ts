import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advisor } from '../models/advisor';
import { Observable } from 'rxjs';
import { AdvisoryRequest } from '../models/advisory-request';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {

  constructor(
    private http: HttpClient
  ) { }

  getAdvisor(userName: string): Observable<Advisor> {
    return this.http.get<Advisor>(`http://localhost:5043/Advisor/${userName}`);
  }

  updateAdvisoryRequest(advisorUserName: string, studentUserName: string, advisoryRequest: AdvisoryRequest): Observable<Advisor> {
    return this.http.put<Advisor>(`http://localhost:5043/Advisor/${advisorUserName}/${studentUserName}`, advisoryRequest);
  }
}
