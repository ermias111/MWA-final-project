import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
      <p>
        <mat-toolbar color="secondary">
          <button mat-icon-button class="example-icon" aria-label="Menu">
            <mat-icon>menu</mat-icon>
          </button>
          <span *ngIf='isAdmin$'>Admin Dashboard</span>
          <!-- <button *ngIf='isAdmin$' mat-icon-button class="example-icon" aria-label="Add racing detail">
            <span>Add Racing</span>
          </button>
          <button *ngIf='isAdmin$' mat-icon-button class="example-icon" aria-label="Add racing detail">
            <span>View Racings</span>
          </button> -->
          
          <span class="example-spacer"></span>
          
          <button mat-icon-button (click)='signout()' >
            <mat-icon>logout</mat-icon>
          </button>
        </mat-toolbar>
      </p>
      
  `,
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  isAdmin$: boolean = this.authService.isAdmin$.getValue();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.authService.signOut();
  }

}
