import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RacingService {

  constructor(private http: HttpClient) { 

  }

  getRacings(){
    return this.http.get('http://localhost:3000/racing')
  }

  
}
