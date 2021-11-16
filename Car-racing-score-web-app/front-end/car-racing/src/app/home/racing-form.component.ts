import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RacingService } from './racing.service';
import { RacingI } from './dto/racingI';
import { Subscription } from 'rxjs';

@Component({
  selector: 'racing-form',
  template: `
  <mat-card class="example-card">
    <form [formGroup]="racingForm" (ngSubmit)="submit()">
      <p>
        <mat-form-field >
          <mat-label>Location</mat-label>
          <input type="text" matInput formControlName="location">
        </mat-form-field>
      </p>
      <p>
        <mat-form-field >
          <mat-label>Date</mat-label>
          <input matInput formControlName="date">
        </mat-form-field>
      </p>  
      <div>
        <button type="submit" mat-button [disabled]="!racingForm.valid">Add</button>
      </div>
    </form>
  </mat-card>
  `,
  styles: [`
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
export class RacingFormComponent implements OnInit {
  racingForm!: FormGroup;
  racing!: RacingI;
  subscription: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private racingService: RacingService) { 
    this.racingForm = formBuilder.group({
      'location' : ['', Validators.required],
      'date' : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.racing = this.racingForm.value;
    this.racingService.postRacing(this.racing).subscribe((res) => {
      if(res){
        console.log(res + "Data successfully added");
      }
    });   
    this.racingForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
