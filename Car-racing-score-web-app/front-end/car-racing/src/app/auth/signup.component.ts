import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { signupI } from './dto/signupDto';

@Component({
  selector: 'app-signup',
  template: `
    <!-- <p>
    <button [routerLink]="['/home/userhome']" >login</button>
      signup works!
    </p> -->
    <mat-card>
        <mat-card-title>Signup</mat-card-title>
        <mat-card-content>
          <form [formGroup]="signupForm" (ngSubmit)="submit()">
          <p>
              <mat-form-field>
                <input type="text" matInput placeholder="first name" formControlName="firstName">
              </mat-form-field>
            </p>

            <p>
              <mat-form-field>
                <input type="text" matInput placeholder="last name" formControlName="lastName">
              </mat-form-field>
            </p>
          
            <p>
              <mat-form-field>
                <input type="text" matInput placeholder="Username" formControlName="userName">
                <mat-error *ngIf="!signupForm.get('userName')?.valid">
                  Invalid Username
                </mat-error>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field>
                <input type="password" matInput placeholder="Password" formControlName="password">
                <mat-error *ngIf="!signupForm.get('password')?.valid">
                  password length must be more than 8
                </mat-error>
              </mat-form-field>
            </p>

            

            <p *ngIf="error" class="error">
              {{ error }}
            </p>

            <div class="button">
              <button type="submit" [disabled]='this.signupForm.invalid' mat-button>Signup</button>
            </div>
            <a [routerLink]="['/auth/login']">login</a>

          </form>
        </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }
      
      a:link{
        text-decoration: none;
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

  `
  ]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup ;
  

  submit() {
    let signupData = {
      firstName: this.signupForm.get(['firstName'])?.value,
      lastName: this.signupForm.get(['lastName'])?.value,
      userName: this.signupForm.get(['userName'])?.value,
      password: this.signupForm.get(['password'])?.value,
      email: '',
      profileImage: '',
      role: 'user'
    }
    
    if (this.signupForm.valid) {
      this.submitEM.emit(this.signupForm.value);
      this.signup(signupData)
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  
  constructor(private authService: AuthService, private fb :FormBuilder) { 
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    });
  }

  async signup(signupData: signupI) {
    await this.authService.signUp(signupData);
    if(!this.authService.isLoggedIn$.getValue()){ 
      this.error = "username already exists";  
    }
  }

  ngOnInit(): void {
  }

}
