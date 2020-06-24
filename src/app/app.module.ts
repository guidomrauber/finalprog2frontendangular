import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppService } from './app.service';
// módulos para el cliente http y los formularios

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaMutanteComponent } from './mutante/lista-mutante.component';
import { HomeComponent } from './home/home.component';
import { DetalleMutanteComponent } from './mutante/detalle-mutante.component';
import { NuevoMutanteComponent } from './mutante/nuevo-mutante.component';
import { EditarMutanteComponent } from './mutante/editar-mutante.component';
import { StatsComponent } from './auth/stats.component';
//import { DetalleMutanteComponent } from './mutante/detalle-mutante.component';
//import { NuevoMutanteComponent } from './mutante/nuevo-mutante.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaMutanteComponent,
    HomeComponent,
    DetalleMutanteComponent,
    NuevoMutanteComponent,
    EditarMutanteComponent,
    //HighchartsChartModule,
    StatsComponent
       //DetalleMutanteComponent,
    //NuevoMutanteComponent
    
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
