import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AlmacenService } from '../../services/almacen.service';
import { ContenedorService } from '../../services/contenedor.service';
import { DevolucionService } from '../../services/devolucion.service';

// Librerias
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { from } from 'rxjs';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styles: [
  ]
})
export class AlmacenComponent implements OnInit{

  almacenes: any[] = [];

  almacenesSolicitados: any[] = [];
  nuevoArrayProductos: any[] = [];
  nuevoArrayCantidaProd: any[] = [];

  productosAlmacenados: any[] = [];
  nombreCategoria: any [] = [];
  totalProductosAlmacenados: number;
  
  listaAlmacenes: any[] = [];

  verAlmacenes = false;
  verForm = false;

  countContenedores: number;

  countDevoluciones: number;


  // singles: any[] = [
  //   {
  //     name: "Germany",
  //     value: 8940000
  //   },
  //   {
  //     name: "USAs",
  //     value: 5000000
  //   },
  //   {
  //     name: "France",
  //     value: 7200000
  //   }
  // ];


  single: any[] = [];
  singleCircular: any[] = [];

  // options table barras
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Producto';
  showYAxisLabel = true;
  yAxisLabel = "Piezas";

  colorScheme = 'nightLights';

  //options table circular
    gradient2: boolean = false;
    showLegend2: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'below';
  
    colorScheme2 = 'cool';


  onSelect(event) {
    console.log(event);
  }

  constructor( private almacenService: AlmacenService,
               private contenedorService: ContenedorService,
               private devolucionService : DevolucionService,
               private router : Router ) {

  }

  ngOnInit() {

    this.almacenService.getAlmacenesSinStock()
    .subscribe((resp): any => {
      this.almacenes = resp;
    });

  this.almacenService.getAlmacenesSolicitados()
    .subscribe((resp): any => {
      console.log('mas solicitados');
      this.almacenesSolicitados = resp;
      console.log(this.almacenesSolicitados);
      console.log(this.almacenesSolicitados[0].nombreProd);
      // this.yAxisLabel = this.almacenesSolicitados[0].nombreProd

      for (let i in this.almacenesSolicitados){
        this.nuevoArrayProductos[i] = this.almacenesSolicitados[i].nombreProd;
        this.nuevoArrayCantidaProd[i] = this.almacenesSolicitados[i].porcentaje;
      }

      console.log(this.nuevoArrayProductos);
      console.log(this.nuevoArrayCantidaProd);



      // for( let i in this.almacenesSolicitados){
      //   this.nuevoArray[i]= Object.values(this.almacenesSolicitados[i]).splice(0,6);
      //   this.nuevoArray[i].splice(0,2);
      //   this.nuevoArray[i].splice(1,2);
      //   console.log(this.nuevoArray);
      // }


      // let singles: any[] = [
      this.single = [
        {
          name: this.nuevoArrayProductos[0],
          value: this.nuevoArrayCantidaProd[0]
        },
        {
          name: this.nuevoArrayProductos[1],
          value: this.nuevoArrayCantidaProd[1]
        },
        {
          name: this.nuevoArrayProductos[2],
          value: this.nuevoArrayCantidaProd[2]
        },
        {
          name: this.nuevoArrayProductos[3],
          value: this.nuevoArrayCantidaProd[3]
        }
      ];

    });
  
    this.almacenService.getProductosAlmacenados()
        .subscribe((resp):any => {
          console.log('productos almacenados');
            console.log(resp);

            for (let i in resp){
              this.productosAlmacenados[i] = resp[i].num_productos;
              this.nombreCategoria[i] = resp[i]._id;
            }

            console.log('numero productos almacenados');
            console.log(this.productosAlmacenados);
            console.log(this.nombreCategoria);
            this.totalProductosAlmacenados = this.productosAlmacenados.reduce((a, b) => a + b, 0)
        
            this.singleCircular = [
              {
                name: this.nombreCategoria[0],
                value: this.productosAlmacenados[0]
              },
              {
                name: this.nombreCategoria[1],
                value: this.productosAlmacenados[1]
              },
              {
                name: this.nombreCategoria[2],
                value: this.productosAlmacenados[2]
              },
              {
                name: this.nombreCategoria[3],
                value: this.productosAlmacenados[3]
              },
              {
                name: this.nombreCategoria[4],
                value: this.productosAlmacenados[4]
              },
              {
                name: this.nombreCategoria[5],
                value: this.productosAlmacenados[5]
              }
            ];
            console.log('siongle circular');
            console.log(this.singleCircular);
        
          });

    this.almacenService.getAlmacenes()
    .subscribe(( resp ):any =>{
      console.log( resp );
      this.listaAlmacenes = resp;
    });

    this.contenedorService.getConteoContenedores()
        .subscribe(( resp )=>{
          console.log( "Contador" + resp );
          this.countContenedores = resp;
        });
    
    this.devolucionService.getContarDevoluciones()
    .subscribe(( resp )=>{
      console.log( "Contador" + resp );
      this.countDevoluciones = resp;
    });    

  }

  eliminarAlmacen(id:string){
    console.log(id);
    this.almacenService.eliminarAlmacen(id)
        .subscribe((resp)=>{
          console.log("borrado");
            console.log(resp);
        });
  }

}
