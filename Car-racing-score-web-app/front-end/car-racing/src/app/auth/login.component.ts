import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
      <button [routerLink]="['/home/userhome']" >login</button>
      login works!
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
