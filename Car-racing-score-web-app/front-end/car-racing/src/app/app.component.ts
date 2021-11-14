import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-racing';
  isLoggedIn$!: Observable<Boolean>;

  constructor(){
    this.isLoggedIn$ = of(false);
  }

  
}
