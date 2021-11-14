import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { loginI } from './dto/loginDto';

@Component({
  selector: 'app-login',
  template: `
    <p>
      <button [routerLink]="['/home/userhome']" (click)='login(loginData)'>login</button>
      login works!
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginData = {
    userName: "kygo88",
    password: "12345"
  }
  login(loginData: loginI){
    this.authService.login(loginData);
  }
}
