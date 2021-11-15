import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>login page works!</p>
    <div class = "container">
    <h1>User Registration form</h1>
    <form>
        <div class = "formgroup">
            <label for = "firstname">FirstName</label><br>
            <input type = "text" name = "firstname" class = "form-control">
        </div>
        <pre></pre>
        <div class = "formgroup">
            <label for = "lastname">LastName</label><br>
            <input type = "text" name = "firstname" class = "form-control">
        </div>
        <pre></pre>
        <div class = "formgroup">
        
            <label for = "email">Email</label><br>
            <input type = "text" name = "firstname" class = "form-control">
        </div>
        <pre></pre>
        <div class = "formgroup">
            <label for = "password">Password</label><br>
            <input type = "text" name = "firstname" class = "form-control">
        </div>
        <button class = "btn btn-primary" type="submit">Submit</button>
    </form>
</div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
