import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../service/infomation.service';
import { Router } from '@angular/router';

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
    private router : Router
  ) {}

  ngOnInit(): void {

  }

  onClickLogin() {
    console.log(this.userName);
    
    this.informationService.getLoginResponse(this.userName, this.password).subscribe({
      next: () => {},
      error: (er) => {
        console.log(er);
        
        alert(er.error);
      },
      complete: () => {
        this.router.navigate(['/login/two-fa']);
      }
    });

  }

  
}
