import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  template: `
    <p>
      <a [routerLink]="['/auth/login']" >login</a> | <a [routerLink]="['/auth/signup']" >signup</a> <br/>
      welcome-page
    </p>
  `,
  styles: [
  ]
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
