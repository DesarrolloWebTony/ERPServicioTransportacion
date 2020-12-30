import { RouterModule, Routes} from '@angular/router';

import{ AlmacenComponent } from './components/almacen/almacen.component';
import{ LogisticaComponent } from './components/logistica/logistica.component';
import{ DistribucionComponent } from './components/distribucion/distribucion.component';
import { CrearalComponent } from './components/almacen/crearal/crearal.component'

const APP_ROUTES:Routes = [
    { path:'Logistica', component: LogisticaComponent },
    { path:'Almacen', component: AlmacenComponent, children:[
        { path:'FormAlmacen', component: CrearalComponent },
        { path:'FormAlmacen/:id', component: CrearalComponent },
    ]},
    { path:'Distribucion', component: DistribucionComponent},
    { path:'**', pathMatch:'full', redirectTo:'Almacen'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);