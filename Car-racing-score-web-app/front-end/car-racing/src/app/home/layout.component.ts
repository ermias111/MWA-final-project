import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div fxLayout="column" fxFlexFill>
        <app-header></app-header>

        <div fxFlex>
          <ng-content></ng-content>
        </div>

        <app-footer></app-footer>
      </div>
    </body>
    </html>
    
  `,
  styles: [
    `
    html, body {
        height: 100%;
        box-sizing: border-box;
        margin: 0;
    }
    `
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
