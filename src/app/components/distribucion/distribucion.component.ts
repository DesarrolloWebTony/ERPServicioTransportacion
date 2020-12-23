import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styles: [
  ]
})
export class DistribucionComponent implements OnInit {

  ver = true;
  show = true;

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




  constructor(private router:Router) {
    console.log(this.router.url);
   }

  ngOnInit(): void {
  }


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
  
        
  cambiarEstadoBtn(){
    this.ver = false;
  }

}
