import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Almacen } from '../../../models/almacen.model';
import { AlmacenService } from '../../../services/almacen.service';

@Component({
  selector: 'app-crearal',
  templateUrl: './crearal.component.html',
  styleUrls: ['./crearal.component.css']
})
export class CrearalComponent implements OnInit {

  almacen: Almacen;
  id: string;

  constructor( private almacenService: AlmacenService, 
               private router: Router,
               private linkActivo: ActivatedRoute ) { }

  ngOnInit(): void {

    this.almacen = new Almacen();
    this.linkActivo.params.subscribe(( params )=>{
      // console.log(params);
      this.id = params['id'];
      // console.log( this.id );
    });

    if(this.id){
    // console.log( this.id );
    this.almacenService.getAlmacen(this.id)
        .subscribe((resp)=>{
            console.log('get almacen');
            console.log(resp);
            this.almacen = resp;
        });
      }
  }

  crearUsuario( form: NgForm ){

    if(form.invalid){
      return;
    }

    if(this.id){
      console.log('listo para actualizar');

      this.almacenService.editarAlmacen(this.id, this.almacen)
          .subscribe((resp)=>{
            console.log('actualizar resp');
            console.log(resp);
          });
    }

    else{
      const almacenData = {
        ...this.almacen
      }
  
      this.almacenService.crearAlmacen( almacenData )
          .subscribe(( resp ) => {
              console.log( resp );
          }, (err) => {
              console.log( err.error.err.errors );
          });
    
      console.log('Formulario enviado');
      // console.log(almacenData);
      // console.log( form );
  
      this.router.navigateByUrl('Mensaje');
    }
  }

}
