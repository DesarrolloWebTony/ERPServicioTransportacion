import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { LogisticaComponent } from './components/logistica/logistica.component';
import { DistribucionComponent } from './components/distribucion/distribucion.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    AlmacenComponent,
    LogisticaComponent,
    DistribucionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
