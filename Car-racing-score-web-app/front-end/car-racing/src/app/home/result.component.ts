import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
          <!-- <mat-selection-list [multiple]="false">
            <mat-list-option *ngFor="let result of racing.result" [value]="result">
            {{result.rank}}.  {{result.driverDetail.name}}
            {{result.finishTime }}
            </mat-list-option>
          </mat-selection-list> -->

         <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
              <ng-container matColumnDef="rank">
                <th mat-header-cell *matHeaderCellDef>Rank</th>
                <td mat-cell *matCellDef="let element">{{element.rank}}</td>
              </ng-container>

              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let element">{{element.driverDetail.name}}</td>
              </ng-container>

              <ng-container matColumnDef="finishtime">
                <th mat-header-cell *matHeaderCellDef>Finish time</th>
                <td mat-cell *matCellDef="let element">{{element.finishTime}}</td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
        <mat-card-actions>
          <button *ngIf='isAdmin$' mat-button (click)="openDialog(racing._id)">Add result</button>
          <button *ngIf='isAdmin$' mat-button (click)='delete(racing._id)'>
            <mat-icon>delete</mat-icon>
          </button>
        </mat-card-actions>
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

      .demo-table {
        width: 100%;
      }

      .demo-button-container {
        padding-bottom: 16px;
      }

      .demo-button + .demo-button {
        margin-left: 8px;
      }
    `
  ]
})
export class ResultComponent implements OnInit {
  @Input() racing:any;
  @Output() changeOnRacing: EventEmitter<number> = new EventEmitter<number>();
  dataSource: any;
  @ViewChild(MatTable) table!: MatTable<any>;
  
  constructor(
      private racingService: RacingService,
      private authService: AuthService,
      public dialog: MatDialog
    ) { 
    }
  isAdmin$ = this.authService.isAdmin$.getValue();

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.racing.result);
  }
  displayedColumns: string[] = ['rank', 'name', 'finishtime'];

  openDialog(racingId: Number) {
    const dialogRef = this.dialog.open(ResultFormComponent, {
      data: {racingId: racingId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.racingService.getRacing(this.racing._id).then((res) => {
        this.racing = res;
        this.dataSource.data = this.racing.result;
        this.table.renderRows();
      });
      
    });
  }

  delete(id: any){
    this.racingService.deleteRacing(id).subscribe((res) => {
      this.changeOnRacing.emit();
    });
  }
}
