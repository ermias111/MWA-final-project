import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { loginI } from './dto/loginDto';
import { signupI } from './dto/signupDto';


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
    this.subscription = this.http.post('http://localhost:3000/auth/login', loginDto)
    .subscribe((res) => {
      if(res) {
        
        this.isLoggedIn$.next(true);

        // if user is admin
        // this.isAdmin$.next(true);

        // if admin redirect to admindashboard and if user redirect to user-home
        // let role  = 'admin';


        // if(role === 'admin'){
        //   this.router.navigate(['/home/admindashboard']);
        // }else{
        //   this.router.navigate(['/home/userhome']);
        // }
        
      }
    })
  }

  signup(signupDto: signupI){
    this.subscription = this.http.post('http://localhost:3000/auth/signup', signupDto)
    .subscribe((res) => {
      if(res) {
        this.isLoggedIn$.next(true);
      }
    })
  }

  signout(){
    this.isLoggedIn$.next(false);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
