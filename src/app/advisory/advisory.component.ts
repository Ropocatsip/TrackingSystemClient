import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { AdvisorService } from '../service/advisor.service';
import { AdvisoryRequest } from '../models/advisory-request';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  advisories = [] as AdvisoryRequest[];

  constructor(
    private localStorageService: LocalStorageService,
    private advisorService: AdvisorService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) { 
      this.advisorService.getAdvisor(userName).subscribe( s => {
        for(const request of s.advisoryRequest) {
          if (request.thesisStatus.statusId == 1) {
            this.advisories.push(request);
          }
        }
      });
    }
  }

}
