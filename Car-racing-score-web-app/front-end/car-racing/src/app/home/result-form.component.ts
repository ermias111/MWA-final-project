import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RacingI } from './dto/racingI';
import { RacingService } from './racing.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './dto/DialogData';

@Component({
  selector: 'result-form',
  template: `
    <mat-card class="example-card">
      <form [formGroup]="resultForm" (ngSubmit)="submit()">
        <p>
          <mat-form-field >
            <mat-label>Driver Name</mat-label>
            <input type="text" matInput formControlName="name">
          </mat-form-field>
        </p>
        <p>
          <mat-form-field >
            <mat-label>Country</mat-label>
            <input matInput formControlName="country">
          </mat-form-field>
        </p>  
        
        <p>
          <mat-form-field >
            <mat-label>Finishing Time</mat-label>
            <input matInput formControlName="finishTime">
          </mat-form-field>
        </p>  

        <p>
          <mat-form-field >
            <mat-label>Rank</mat-label>
            <input matInput placeholder='rank' formControlName="rank">
          </mat-form-field>
        </p>  
    
        <div>
          <button type="submit" mat-button [disabled]="!resultForm.valid">Add</button>
        </div>
      </form>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      },

      .example-card{
        max-width: 70%;
        margin-bottom: 8px;
        margin-left: 12%
      }
    `
  ]
})
export class ResultFormComponent implements OnInit {
  resultForm!: FormGroup;
  @Input() racingId: any;
  @Output() changeOnAddResult: EventEmitter<number> = new EventEmitter<number>();

  subscription: Subscription = new Subscription();

  
  constructor(
    private racingService: RacingService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ResultFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ){
    this.resultForm = this.formBuilder.group({
      'rank': ['', Validators.required],
      'finishTime': ['', Validators.required],
      'name': ['', Validators.required],
      'country': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async submit(){
    let resultInput = {
      rank: this.resultForm.get(['rank'])?.value,
      finishTime: this.resultForm.get(['finishTime'])?.value,
      driverDetail: {
          name: this.resultForm.get(['name'])?.value,
          country: this.resultForm.get(['country'])?.value,
          profileImage: "",
          car: {
              image: "",
              brand: "",
              plateNumber: ""
          }
      }
    }

    await this.racingService.addResult(this.data.racingId, resultInput);
    this.dialogRef.close()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
