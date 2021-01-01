import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Logistica } from '../../../models/logistica.model';

import { LogisticaService } from '../../../services/logistica.service';

@Component({
  selector: 'app-crearlo',
  templateUrl: './crearlo.component.html',
  styles: [
  ]
})
export class CrearloComponent implements OnInit {

  logistica: Logistica;
  id: string;

  constructor( private logisticaService: LogisticaService,
               private router: Router,
               private linkActivo: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.logistica = new Logistica();

    this.linkActivo.params.subscribe(( params )=>{
      this.id = params['id'];
      console.log( this.id );
    });

    if(this.id){
    // console.log( this.id );
    this.logisticaService.getRuta(this.id)
        .subscribe((resp)=>{
            console.log('get logistica');
            console.log(resp);
            this.logistica = resp;
        });
      }

  }

  crearRuta( form:NgForm ){

    if(form.invalid){
      return;
    }

    if(this.id){
      this.logisticaService.editarLogistica(this.id, this.logistica)
          .subscribe((resp)=>{
            console.log('actualizar resp');
            console.log(resp);
            this.router.navigateByUrl('Mensaje');
          });
    }else{

      this.logisticaService.crearRuta(this.logistica)
        .subscribe((resp)=>{
          console.log(resp);
        });

      this.router.navigateByUrl('Mensaje');

    }
  }
}
