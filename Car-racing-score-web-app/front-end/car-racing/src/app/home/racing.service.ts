import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getItem, removeItem, setItem, StorageItem } from '../@core/utils';
import { RacingI } from './dto/racingI';


@Injectable({
  providedIn: 'root'
})
export class RacingService {

  constructor(private http: HttpClient) { 

  }

  getRacings(){
    return this.http.get('http://localhost:3000/racing')
  }

  postRacing(racing: RacingI){
    return this.http.post('http://localhost:3000/racing', racing);
  }


  addResult(id: any, result: any){
    return this.http.patch(`http://localhost:3000/racing/addresult/${id}`, result).subscribe()
  }

  deleteRacing(id: any){
    return this.http.delete(`http://localhost:3000/racing/${id}`).subscribe();
  }
}
