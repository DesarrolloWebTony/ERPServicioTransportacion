import { RouterModule, Routes} from '@angular/router';

import { AlmacenComponent } from './components/almacen/almacen.component';
import { LogisticaComponent } from './components/logistica/logistica.component';
import { CrearloComponent } from './components/logistica/crearlo/crearlo.component';
import { DistribucionComponent } from './components/distribucion/distribucion.component';
import { CrearalComponent } from './components/almacen/crearal/crearal.component'
import { MessageComponent } from './components/message/message.component';

const APP_ROUTES:Routes = [
    { path:'Logistica', component: LogisticaComponent, children:[
        {path:'FormLogistica', component: CrearloComponent}
    ]},
    { path:'Almacen', component: AlmacenComponent, children:[
        { path:'FormAlmacen', component: CrearalComponent },
        { path:'FormAlmacen/:id', component: CrearalComponent },
    ]},
    { path:'Distribucion', component: DistribucionComponent},
    { path:'Mensaje', component: MessageComponent},
    { path:'**', pathMatch:'full', redirectTo:'Almacen'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);