import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { AdvisorService } from '../service/advisor.service';
import { Advisor } from '../models/advisor';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  advisor = {} as Advisor;

  constructor(
    private localStorageService: LocalStorageService,
    private advisorService: AdvisorService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) { 
      this.advisorService.getAdvisor(userName).subscribe( s => {
        this.advisor = s;
      });
    }
  }

}
