import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor( private logisticaService: LogisticaService ) {
  }

  ngOnInit(): void {
    this.logistica = new Logistica();
  }

  crearRuta( form:NgForm ){

    if(form.invalid){
      return;
    }

    this.logisticaService.crearRuta(this.logistica)
        .subscribe((resp)=>{
          console.log(resp);
        });

    // console.log(this.logistica);
  }
}
