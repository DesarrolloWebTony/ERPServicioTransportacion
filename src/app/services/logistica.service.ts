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

  getRuta(id:string){
     return this.http.get(`http://localhost:3000/logistica/${id}`)
                     .pipe(map( resp => {
                    return resp['logistica'];
                }));
  }

  getEnRuta(){
     return this.http.get(`http://localhost:3000/enRuta`)
                     .pipe(map( resp => {
                    return resp['rutas'];
                }));
  }

  getDestinosSolicitados(){
    return this.http.get(`http://localhost:3000/destinosSolicitados`)
                    .pipe(map( resp => {
                   return resp['rutas'];
               }));
  }

  getPedidosHechos(){
    return this.http.get(`http://localhost:3000/pedidosHechos`)
                    .pipe(map( resp => {
                  return resp['rutas'];
              }));
  }

  editarLogistica(id:string, logisticaData){
    return this.http.put(`http://localhost:3000/logistica/${id}`, logisticaData);
  }

  eliminarAlmacen(id:string){
    return this.http.delete(`http://localhost:3000/logistica/${id}`);
  }



}
