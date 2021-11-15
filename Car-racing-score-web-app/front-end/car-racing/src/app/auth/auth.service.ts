import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { loginI } from './dto/loginDto';
import { signupI } from './dto/signupDto';
import { UserResponse } from './dto/userResponse';
import { getItem, removeItem, setItem, StorageItem } from '../@core/utils';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = new BehaviorSubject<boolean>(false);
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private router: Router) { }

  getIsLoggedIn(): boolean{
    return this.isLoggedIn$.getValue();
  }

  login(loginDto: loginI){
    this.subscription = this.http.post<UserResponse>('http://localhost:3000/auth/login', loginDto)
    .subscribe((res) => {
      if(res) {
        
        this.isLoggedIn$.next(true);
        setItem(StorageItem.Auth, res.token);

        if(res.payload.role === 'admin'){
          this.isAdmin$.next(true);
          this.router.navigate(['/home/admindashboard']);
        }else{
          this.router.navigate(['/home/userhome']);
        }
        
      }
    })
  }

  signUp(signupDto: signupI){
    this.subscription = this.http.post('http://localhost:3000/auth/signup', signupDto)
    .subscribe((res) => {
      if(res) {
        this.isLoggedIn$.next(true);
      }
    })
  }

  signOut(){
    removeItem(StorageItem.Auth);
    this.isLoggedIn$.next(false);
    this.router.navigate(['home/welcome'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
