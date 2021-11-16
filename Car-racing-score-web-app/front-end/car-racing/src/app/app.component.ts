import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { getItem, removeItem, setItem, StorageItem } from './@core/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn$!:Observable<Boolean>;
  // isThereASession$: Observable<unknown> = of(true);

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    // if(getItem(StorageItem.Auth)){
    //   this.isThereASession$ = of(true);
    // }
  }
}
