import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {

  constructor( private http: HttpClient ) { }

  crearDistribucion( Data ){
    return this.http.post('http://localhost:3000/distribucion', Data);
  }

    getDistribucion(id:string){
     return this.http.get(`http://localhost:3000/distribucion/${id}`)
                     .pipe(map( resp => {
                      return resp['distribucion'];
                }));
  }

  getDistribuciones(){
    return this.http.get('http://localhost:3000/distribuciones')
      .pipe(map( resp => {
        return resp['distribucionesBD'];
    }));
  }

  getTiposEntrega(){
    return this.http.get('http://localhost:3000/tiposEntrega')
      .pipe(map( resp=>{
          return resp['tipos'];
      }));
  }

  editarDistribucion(id:string, data){
    return this.http.put(`http://localhost:3000/distribucion/${id}`, data);
  }


  eliminarDistribucion(id:string){
    return this.http.delete(`http://localhost:3000/distribucion/${id}`);
  }

}
