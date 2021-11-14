import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <p>
    <button [routerLink]="['/home/userhome']" >login</button>
      signup works!
    </p>
  `,
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
