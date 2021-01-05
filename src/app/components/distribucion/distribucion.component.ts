import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DistribucionService } from '../../services/distribucion.service';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styles: [
  ]
})
export class DistribucionComponent implements OnInit {

  verDistribuciones: boolean = false;
  verForm: boolean = false;

  listaDistribuciones: any[] = [];

  tiposEnvios: any [] = [];
  enviosExpress: number;
  enviosConvencional: number;

  single: any[] =[
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = 'nightLights';

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  constructor(private router:Router, 
              private distribucionService: DistribucionService) {
                console.log(this.router.url);
   }

  ngOnInit(): void {
    this.distribucionService.getDistribuciones()
    .subscribe((resp)=>{
        this.listaDistribuciones = resp;
        console.log(resp);
    });

    this.distribucionService.getTiposEntrega()
        .subscribe((resp)=>{
          this.tiposEnvios = resp;
          this.enviosExpress = this.tiposEnvios[0].numero;
          this.enviosConvencional = this.tiposEnvios[1].numero;
          console.log('tipos envios');
          console.log(this.tiposEnvios);
        })

  }

  eliminarDistribucion(id:string){
    console.log(id);
    this.distribucionService.eliminarDistribucion(id)
        .subscribe((resp)=>{
          console.log("borrado");
          console.log(resp);
          this.router.navigateByUrl('Mensaje');
        });
  }

        
}
