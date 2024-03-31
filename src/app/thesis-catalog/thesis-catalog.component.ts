import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../service/advisor.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Advisor } from '../models/advisor';
import { AdvisoryRequest } from '../models/advisory-request';

@Component({
  selector: 'app-thesis-catalog',
  templateUrl: './thesis-catalog.component.html',
  styleUrls: ['./thesis-catalog.component.css']
})
export class ThesisCatalogComponent implements OnInit {

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
          if (request.thesisStatus.statusId != 1) {
            this.advisories.push(request);
          }
        }
      });
    }
  }

}
