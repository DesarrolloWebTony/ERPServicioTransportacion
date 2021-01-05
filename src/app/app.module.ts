import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { LogisticaComponent } from './components/logistica/logistica.component';
import { DistribucionComponent } from './components/distribucion/distribucion.component';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CrearalComponent } from './components/almacen/crearal/crearal.component';
import { MessageComponent } from './components/message/message.component';
import { CrearloComponent } from './components/logistica/crearlo/crearlo.component';
import { CreardiComponent } from './components/distribucion/creardi/creardi.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlmacenComponent,
    LogisticaComponent,
    DistribucionComponent,
    CrearalComponent,
    MessageComponent,
    CrearloComponent,
    CreardiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
