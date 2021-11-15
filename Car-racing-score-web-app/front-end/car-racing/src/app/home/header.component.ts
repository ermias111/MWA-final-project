import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <!-- <p>
      header works!
      <button (click)='signout()' >signout</button>
    </p> -->
    <p>
      <mat-toolbar color="primary">
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
          <mat-icon>menu</mat-icon>
        </button>
        <span>My App</span>
        <span class="example-spacer"></span>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar>
    </p>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.authService.signOut();
  }

}
