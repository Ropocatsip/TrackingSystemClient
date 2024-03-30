import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../service/infomation.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userName = "";
  password = "";

  constructor(
    private informationService: InfomationService,
    private router : Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {

  }

  onClickLogin() {
    this.informationService.getLoginResponse(this.userName, this.password).subscribe({
      next: () => {},
      error: (er) => {
        alert(er.error);
      },
      complete: () => {
        this.localStorageService.setItem('userName', this.userName);
        this.router.navigate(['/login/two-fa']);
      }
    });
  }

  
}
