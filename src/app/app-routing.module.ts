import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaMutanteComponent } from './mutante/lista-mutante.component';
import { EditarMutanteComponent } from './mutante/editar-mutante.component';
import { DetalleMutanteComponent } from './mutante/detalle-mutante.component';
import { NuevoMutanteComponent } from './mutante/nuevo-mutante.component';
import { StatsComponent } from './auth/stats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'lista', component: ListaMutanteComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'detalle/:id', component: DetalleMutanteComponent},
  {path: 'nuevo', component: NuevoMutanteComponent},
  {path: 'editar/:id', component: EditarMutanteComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
