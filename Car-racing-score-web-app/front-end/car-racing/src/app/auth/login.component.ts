import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { loginI } from './dto/loginDto';

@Component({
  selector: 'app-login',
  template: `
    <!-- <p>
      <button [routerLink]="['/home/userhome']" (click)='login(loginData)'>login</button>
      login works!
    </p> -->

    <mat-card>
        <mat-card-title>Login</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="submit()">
            <p>
              <mat-form-field>
                <input type="text" matInput placeholder="Username" formControlName="userName">
                
              </mat-form-field>
            </p>

            <p>
              <mat-form-field>
                <input type="password" matInput placeholder="Password" formControlName="password">
              </mat-form-field>
            </p>

            <p *ngIf="error" class="error">
              {{ error }}
            </p>

            
            <div class="button">
              <button type="submit" mat-button>Login</button>
            </div>
            <a [routerLink]="['/auth/signup']">create new account</a>
          </form>
        </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .button {
        display: flex;
        justify-content: flex-end;
      }

      a { 
        text-decoration: none;
      }

    `
  ]
})
export class LoginComponent implements OnInit {
  loginData!: loginI;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  async login(loginData: loginI){
    await this.authService.login(loginData) ;
    if(!this.authService.isLoggedIn$.getValue()){ 
      this.error = "invalid login"  
    }
  }

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.loginData = this.form.value;
      this.login(this.loginData)
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
