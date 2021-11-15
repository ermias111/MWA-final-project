import { Component, Input, OnInit } from '@angular/core';


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
        </mat-selection-list>
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
    `
  ]
})
export class ResultComponent implements OnInit {
  @Input() racing:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
