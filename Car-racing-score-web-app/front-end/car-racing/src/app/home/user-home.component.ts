import { Component, OnInit } from '@angular/core';
import { RacingService } from './racing.service';

@Component({
  selector: 'app-user-home',
  template: `
      <div>
        <ul *ngFor="let racing of racings"> 
          <li>{{racing.date}} | {{racing.location}}</li>
        </ul>
      </div>
  `,
  styles: [
  ]
})
export class UserHomeComponent implements OnInit {
  racings: any;

  constructor(racingService: RacingService) { 
      this.racings =  racingService.getRacings()
  }

  ngOnInit(): void {
  }

}
