import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { RacingI } from './dto/racingI';
import { RacingService } from './racing.service';
import { ResultFormComponent } from './result-form.component';

export interface ResultElement {
  rank: string;
  name: string;
  finishTime: string;
}

@Component({
  selector: 'app-result',
  template: `
    <p>
      <mat-card class="example-card">
        <mat-card-title-group>
          <mat-card-title>{{racing.location}}</mat-card-title>
          <mat-card-subtitle>{{racing.date.split('T')[0]}}</mat-card-subtitle>
        </mat-card-title-group>
        <mat-card-content>
          <mat-selection-list [multiple]="false">
            <mat-list-option *ngFor="let result of racing.result" [value]="result">
            {{result.rank}}.  {{result.driverDetail.name}}
            {{result.finishTime }}
            </mat-list-option>
            <button *ngIf='isAdmin$' mat-button (click)="openDialog(racing._id)">Add result</button>
          </mat-selection-list>
<!-- 
          <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
              <ng-container matColumnDef="rank">
                <th mat-header-cell *matHeaderCellDef>Rank</th>
                <td mat-cell *matCellDef="let element">{{element.rank}}</td>
              </ng-container>

              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let element">{{element.name}}</td>
              </ng-container>

              <ng-container matColumnDef="finishTIme">
                <th mat-header-cell *matHeaderCellDef>Finish time</th>
                <td mat-cell *matCellDef="let element">{{element.finishTime}}</td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table> -->
        </mat-card-content>
      </mat-card>
    </p>
  `,
  styles: [
    `
      .example-card {
        max-width: 70%;
        margin-bottom: 8px;
        margin-left: 12%
      }

      /* .demo-table {
        width: 100%;
      }

      .demo-button-container {
        padding-bottom: 16px;
      }

      .demo-button + .demo-button {
        margin-left: 8px;
      } */
    `
  ]
})
export class ResultComponent implements OnInit {
  @Input() racing:any;
  // dataSource: ResultElement[];
  constructor(
      private authService: AuthService,
      public dialog: MatDialog
    ) { 
      // console.log(this.racing)
      // this.dataSource = this.racing.result;
      // console.log(this.dataSource);
    }
  isAdmin$ = this.authService.isAdmin$.getValue();

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['rank', 'name', 'finish time'];

  openDialog(racingId: Number) {
    const dialogRef = this.dialog.open(ResultFormComponent, {
      data: {racingId: racingId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
