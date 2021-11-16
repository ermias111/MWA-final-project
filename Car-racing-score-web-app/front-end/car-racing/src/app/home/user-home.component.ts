import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RacingService } from './racing.service';

@Component({
  selector: 'app-user-home',
  template: `
      <div>
        <div *ngFor="let racing of racings"> 
          <app-result [racing]="racing"></app-result>
        </div>
      </div>
  `,
  styles: [`
  `
  ]
})
export class UserHomeComponent implements OnInit {
  racings: any;
  subscription: Subscription = new Subscription();


  constructor(private racingService: RacingService) { 
      this.load();
  }

  load(){
    this.subscription = this.racingService.getRacings().subscribe((res) =>{
      this.racings = res;
    })
  }

  ngOnInit(): void {
    this.load();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
