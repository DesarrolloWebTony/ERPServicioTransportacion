import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlmacenService } from '../../services/almacen.service';

// Librerias
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { from } from 'rxjs';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styles: [
  ]
})
export class AlmacenComponent implements OnInit {

  almacenes: any[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  constructor( almacenService : AlmacenService ) {
      almacenService.getAlmacenesSinStock()
                    .subscribe( (resp):any => {
                        console.log( resp );
                        this.almacenes = resp;
                    })
   }

  ngOnInit(): void {

  }

    // ==============================> GRAFICAS
    // events
    chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
   chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    randomize(): void {
      // Only Change 3 values
      this.barChartData[0].data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40 ];
    }

  // =============================================

  
}
