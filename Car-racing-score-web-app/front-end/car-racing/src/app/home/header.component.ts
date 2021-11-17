import { Component, OnInit } from '@angular/core';
import { getItem, StorageItem } from '../@core/utils';
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
          
          <span class="example-spacer"></span>
          <span>{{firstName}} </span>
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
  firstName = getItem(StorageItem.FirstName);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.authService.signOut();
  }

}
