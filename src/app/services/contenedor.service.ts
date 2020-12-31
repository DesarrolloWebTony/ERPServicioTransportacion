import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContenedorService {

  constructor( private http: HttpClient ) { }

  getConteoContenedores(){
    return this.http.get('http://localhost:3000/contarContenedores')
               .pipe(map((resp) => {
                  return resp['contador'];
               }));
  }

}
