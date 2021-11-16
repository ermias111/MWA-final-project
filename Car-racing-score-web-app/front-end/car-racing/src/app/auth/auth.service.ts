import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { loginI } from './dto/loginDto';
import { signupI } from './dto/signupDto';
import { UserResponse, SignupResponse } from './dto/userResponse';
import { getItem, removeItem, setItem, StorageItem } from '../@core/utils';


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
        setItem(StorageItem.Auth, response!.token);

        // Since we are not using redux we used the local storage to save user state
        setItem(StorageItem.FirstName, response?.payload.firstName)

        if(response!.payload.role === 'admin'){
          this.isAdmin$.next(true);
          this.router.navigate(['/home/admindashboard']);
        }else{
          this.router.navigate(['/home/userhome']);
        }
    }catch(err){
      console.log(err)
    }
    
    
      
        
        
  }

  signUp(signupDto: signupI){
    this.subscription = this.http.post<UserResponse>('http://localhost:3000/auth/signup', signupDto)
    .subscribe((res) => {
      if(res) {
        this.isLoggedIn$.next(true);
        setItem(StorageItem.Auth, res.token);
        setItem(StorageItem.FirstName, res?.payload.firstName)

        console.log(res.payload)
        if(res.payload.role === 'admin'){
          this.isAdmin$.next(true);
          this.router.navigate(['/home/admindashboard']);
        }else{
          this.router.navigate(['/home/userhome']);
        }
        
      }
    })
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
