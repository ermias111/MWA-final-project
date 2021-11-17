import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <mat-tab-group>
      <mat-tab label="Add Racing" > 
        <racing-form></racing-form>
      </mat-tab>
      <mat-tab label="View Racing"> 
        <ng-template matTabContent>
          <app-user-home  ></app-user-home>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    racing-form{
      margin-left: 3%;
      margin-top: 1%;
    }
  `
  ]
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
