import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { loginI } from './dto/loginDto';
import { signupI } from './dto/signupDto';
import { UserResponse, SignupResponse } from './dto/userResponse';
import { getItem, removeItem, setItem, StorageItem } from '../@core/utils';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!getItem(StorageItem.Auth));
  isAdmin$ = new BehaviorSubject<boolean>(!!getItem(StorageItem.Auth));
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private router: Router) { }

  getIsLoggedIn(): boolean{
    return this.isLoggedIn$.getValue();
  }

  async login(loginDto: loginI){
    try{
      let response : UserResponse | undefined = await this.http.post<UserResponse>('http://localhost:3000/auth/login', loginDto).toPromise();
      this.isLoggedIn$.next(true);
      let decoded : any = jwt_decode(response!.token);
        setItem(StorageItem.Auth, response!.token);
        
        // Since we are not using redux we used the local storage to save user state
        setItem(StorageItem.FirstName, decoded.firstName)
        console.log(decoded.role === 'admin')
        
        if(decoded.role === 'admin'){
          this.isAdmin$.next(true);
          this.router.navigate(['/home/admindashboard']);
        }else{
          this.isAdmin$.next(false);
          this.router.navigate(['/home/userhome']);
        }
    }catch(err){
      console.log(err)
    }
  }

  async signUp(signupDto: signupI){
    try{
      let response : UserResponse | undefined = await this.http.post<UserResponse>('http://localhost:3000/auth/signup', signupDto).toPromise()
      let decoded : any = jwt_decode(response!.token);

      this.isLoggedIn$.next(true);
      setItem(StorageItem.Auth, response!.token);
      setItem(StorageItem.FirstName, decoded.firstName)

      // console.log(response!.payload)
      if(decoded.role === 'admin'){
        this.isAdmin$.next(true);
        this.router.navigate(['/home/admindashboard']);
      }else{
        this.isAdmin$.next(false);
        this.router.navigate(['/home/userhome']);
      }
    }catch(err){
      console.log(err)
    }
  }

  signOut(){
    removeItem(StorageItem.Auth);
    this.isLoggedIn$.next(false);
    this.router.navigate(['auth/login'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
