import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LogisticaService } from '../../services/logistica.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styles: [
  ]
})
export class LogisticaComponent implements OnInit {

  listaRutas: any[] = [];

  verRutas: boolean = false;

  enRuta: any[] = [];
  
  hechos: any[] = [];

  destinos: any [] = [];
  destinosName: any[] = [];
  destinosCount: any [] = [];

  single: any[] =[
    // {
    //   "name": "Germany",
    //   "value": 8940000
    // },
    // {
    //   "name": "USA",
    //   "value": 5000000
    // },
    // {
    //   "name": "France",
    //   "value": 7200000
    // },
    //   {
    //   "name": "UK",
    //   "value": 6200000
    // }
  ];
    
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = 'cool';

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  constructor( private logisticaService : LogisticaService,
               private router: Router ) {
    // Object.assign(this, { single });
   }

  ngOnInit(): void {
    this.logisticaService.getRutas()
    .subscribe((resp)=>{
        this.listaRutas = resp;
        console.log(resp);
    });

    this.logisticaService.getEnRuta()
        .subscribe((resp)=>{
        this.enRuta = resp;
        console.log(resp);
    });

    this.logisticaService.getDestinosSolicitados()
            .subscribe((resp)=>{
        this.destinos = resp;
        console.log(resp);

        for (let i in this.destinos){
          this.destinosName[i] = this.destinos[i]._id;
          this.destinosCount[i] = this.destinos[i].numElem;
        }
  
        console.log(this.destinosName);
        console.log(this.destinosCount);

        this.single = [
          {
            name: this.destinosName[0],
            value: this.destinosCount[0]
          },
          {
            name: this.destinosName[1],
            value: this.destinosCount[1]
          },
          {
            name: this.destinosName[2],
            value: this.destinosCount[2]
          }
          // {
          //   name: this.nuevoArrayProductos[3],
          //   value: this.nuevoArrayCantidaProd[3]
          // }
        ];

    });

        this.logisticaService.getPedidosHechos()
        .subscribe((resp)=>{
        this.hechos = resp;
        console.log(resp);
    });


  }

  eliminarAlmacen(id:string){
    console.log(id);
    this.logisticaService.eliminarAlmacen(id)
        .subscribe((resp)=>{
          console.log("borrado");
          console.log(resp);
          this.router.navigateByUrl('Mensaje');
        });
  }

}
