import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DistribucionService } from '../../../services/distribucion.service';

import { Distribucion } from '../../../models/distribucion.model';

@Component({
  selector: 'app-creardi',
  templateUrl: './creardi.component.html',
  styles: [
  ]
})
export class CreardiComponent implements OnInit {

  distribucion: Distribucion;
  id: string;

  constructor( private distribucionService: DistribucionService,
               private router: Router,
               private linkActivo: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.distribucion = new Distribucion();

    this.linkActivo.params.subscribe(( params )=>{
      this.id = params['id'];
      console.log( this.id );
    });

    if(this.id){
    this.distribucionService.getDistribucion(this.id)
        .subscribe((resp)=>{
            console.log('get distribucion');
            console.log(resp);
            this.distribucion = resp;
        });
      }
  }

  crearDistribucion( form:NgForm ){

    if(form.invalid){
      return;
    }

    if(this.id){
      this.distribucionService.editarDistribucion(this.id, this.distribucion)
          .subscribe((resp)=>{
            console.log('actualizar resp');
            console.log(resp);
            this.router.navigateByUrl('Mensaje');
          });
    }else{

      this.distribucionService.crearDistribucion(this.distribucion)
        .subscribe((resp)=>{
          console.log(resp);
        });

      this.router.navigateByUrl('Mensaje');

    }
  }

}
