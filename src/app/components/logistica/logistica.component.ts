import { Component, OnInit } from '@angular/core';

import { LogisticaService } from '../../services/logistica.service';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styles: [
  ]
})
export class LogisticaComponent implements OnInit {

  listaRutas: any[] = [];

  verRutas: false;

  constructor( private logisticaService : LogisticaService ) { }

  ngOnInit(): void {
    this.logisticaService.getRutas()
    .subscribe((resp)=>{
        this.listaRutas = resp;
        console.log(resp);
    });
  }

 
}
