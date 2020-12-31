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

  productosAlmacenados: string;

  listaAlmacenes: any[] = [];

  verAlmacenes = false;

  countContenedores: number;

  countDevoluciones: number;

  pais = {
    name: "Germany",
    value: 8940000
  };

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


  // single: any[] = this.singles;
  single: any[] = [];

  multi: any[];

  view: any[] = [600, 400];

  // options table
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Producto';
  showYAxisLabel = true;
  yAxisLabel = "Total de Piezas";

  colorScheme = 'nightLights';

  // colorScheme = {
  //   domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  // };

  // constructor() {
  //   //Object.assign(this, { single })
  // }

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
      // console.log(resp);
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
        }
        // {
        //   name: this.nuevoArrayProductos[3],
        //   value: this.nuevoArrayCantidaProd[3]
        // }
      ];

    });
  
    this.almacenService.getProductosAlmacenados()
        .subscribe((resp):any => {
            console.log(resp);
            this.productosAlmacenados = resp[0].num_productos;
            console.log(this.productosAlmacenados);
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

  // capturarID( obj:any ){
  //   // console.log(i+1);
  //   //console.log(almacen);
  //   let idMongo = obj._id;
  //   console.log(idMongo);
  //   this.router.navigateByUrl('FormAlmacen');
  // }


    // ==============================> GRAFICAS
  //   public barChartOptions: ChartOptions = {
  //     responsive: true,
  //     // We use these empty structures as placeholders for dynamic theming.
  //     scales: { xAxes: [{}], yAxes: [{}] },
  //     plugins: {
  //       datalabels: {
  //         anchor: 'end',
  //         align: 'end',
  //       }
  //     }
  //   };
  //   public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  //   public barChartType: ChartType = 'bar';
  //   public barChartLegend = true;
  //   //public barChartPlugins = [pluginDataLabels];
  
  //   public barChartData: ChartDataSets[] = [
  //     { data: [100, 59, 80, 81, 56, 55, 40], label: this.labelA },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  //   ];

  // // ==============================> GRAFICAS
  // // events
  // chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  // }

  // =============================================

  eliminarAlmacen(id:string){
    console.log(id);
    this.almacenService.eliminarAlmacen(id)
        .subscribe((resp)=>{
          console.log("borrado");
            console.log(resp);
        });
  }

}
