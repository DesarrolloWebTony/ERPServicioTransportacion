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

  listaDistribuciones: any[] = [];

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
