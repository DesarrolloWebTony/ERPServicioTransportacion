import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogisticaService {

  constructor( private http:HttpClient ) { }

  crearRuta( rutaData ){
    return this.http.post('http://localhost:3000/logistica', rutaData);
  }

  getRutas(){
    return this.http.get('http://localhost:3000/logisticas')
      .pipe(map( resp => {
        return resp['rutas'];
    }));
  }

}
