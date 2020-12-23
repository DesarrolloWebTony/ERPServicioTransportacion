import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ERP';
  rutaName = 'ERP/ Compañia de envios';

  verMenu = false;

  constructor( private route: ActivatedRoute, private router:Router ) {

    console.log(this.router.url);

    // this.route.queryParams.subscribe(params => {
    // this.rutaName = params['name'];
    //   console.log( params['name'] );
    // });

  }
  
}
