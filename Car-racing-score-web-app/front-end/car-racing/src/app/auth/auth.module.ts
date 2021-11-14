import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ])
  ],

  bootstrap: [LoginComponent]
})
export class AuthModule { }
