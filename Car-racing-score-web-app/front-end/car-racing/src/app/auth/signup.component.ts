import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
          <form [formGroup]="form" (ngSubmit)="submit()">
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
              <button type="submit" mat-button>Signup</button>
            </div>

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
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });


  signupData = {
    firstName: "kygo88",
    lastName: "12345",
    userName: "kygo88",
    password: "12345",
    role: 'user'
  }
  

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.signup(this.signupData)
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  
  constructor(private authService: AuthService) { }

  signup(signupData: signupI) {
    this.authService.signUp(signupData)
  }

  ngOnInit(): void {
  }

}
