import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevolucionService {

  constructor( private http: HttpClient ) { }

  getContarDevoluciones(){
    return this.http.get('http://localhost:3000/contarDevoluciones')
               .pipe(map((resp) => {
                  return resp['contador'];
               }));
  }

}
