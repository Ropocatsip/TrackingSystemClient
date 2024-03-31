import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advisor } from '../models/advisor';
import { Observable } from 'rxjs';

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
}
