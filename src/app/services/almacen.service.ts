import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor( private http: HttpClient ) {
   }

   getAlmacenes(){
     return this.http.get('http://localhost:3000/almacenes')
                .pipe(map( resp => {
                    return resp['almacenes'];
                }));
   }
   
   getAlmacenesSinStock(){
     return this.http.get('http://localhost:3000/almacenesSinStock')
                .pipe(map( resp => {
                    return resp['almacenes'];
                }));
   }

}
