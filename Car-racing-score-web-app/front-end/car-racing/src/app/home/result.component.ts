import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  template: `
    <p>
      <h1>result works!</h1>
    </p>
    
  `,
  styles: [
  ]
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
