import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor( private http: HttpClient ) {
   }

   getAlmacen(id:string){
     return this.http.get(`http://localhost:3000/almacen/${id}`)
                     .pipe(map( resp => {
                    return resp['almacen'];
                }));
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

   getAlmacenesSolicitados(){
     return this.http.get('http://localhost:3000/almacenesSolicitados')
                .pipe(map( resp => {
                      return resp['almacenes'];
                }));
   }

   getProductosAlmacenados(){
     return this.http.get('http://localhost:3000/productosAlmacenados')
                .pipe(map(resp => {
                  return resp['productos'];
                }))
   }

   crearAlmacen( almacenData ){
     return this.http.post('http://localhost:3000/almacen',almacenData);
   }

   editarAlmacen(id:string, almacenData){
     return this.http.put(`http://localhost:3000/almacen/${id}`, almacenData)
   }

   eliminarAlmacen(id:string){
     return this.http.delete(`http://localhost:3000/almacen/${id}`)
   }
}
