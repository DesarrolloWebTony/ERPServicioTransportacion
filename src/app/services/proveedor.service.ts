import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor( private http: HttpClient ) { }

  crearSolicitud( proveedorData ){
    return this.http.post('http://localhost:3000/proveedor',proveedorData);
  }

  getSolicitud(id:string){
    return this.http.get(`http://localhost:3000/proveedor/${id}`)
                    .pipe(map( resp => {
                   return resp['solicitud'];
               }));
  }

}
