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
  advisorUserName = "";

  constructor(
    private localStorageService: LocalStorageService,
    private advisorService: AdvisorService
  ) {}

  ngOnInit(): void {
    const userName = this.localStorageService.getItem('userName');
    if (userName) { 
      this.advisorUserName = userName;
      this.getAdvisory();
    }
  }

  getAdvisory() {
    this.advisories = [];
    this.advisorService.getAdvisor(this.advisorUserName).subscribe( s => {
      for(const request of s.advisoryRequest) {
        if (request.thesisStatus.statusId == 1) {
          this.advisories.push(request);
        }
      }
    });
  }

  onClickConfrim(advisor : AdvisoryRequest, isAccept: boolean) {
    if (isAccept) {
      advisor.thesisStatus.statusId = 2;
      advisor.thesisStatus.desc = "รอสอบ Proposal ครั้งที่ 1";

    } else {
      advisor.thesisStatus.statusId = 0;
      advisor.thesisStatus.desc = "ยังไม่มีที่ปรึกษา";
    }
    console.log(advisor);
    this.advisorService.advisorUpdateAdvisoryRequest(this.advisorUserName, advisor).subscribe({
      next:() => {},
      error:(err) => {
        alert(err.error);
      },
      complete:() => {
        this.getAdvisory();
        alert("ดำเนินการแล้ว");
      }
    });
  }

}
