import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TemtemComponent } from './temtem/temtem.component';
import { CircuitComponent } from './circuit/circuit.component';
import { TournamentsComponent } from './tournaments/tournaments.component';


const routes: Routes = [
  { path: '', redirectTo: 'circuit', pathMatch: 'full' },
  { path: 'circuit', component: CircuitComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'statistics/overview', component: OverviewComponent },
  { path: 'statistics/tournament/:id', component: OverviewComponent },
  { path: 'statistics/temtem/:id', component: TemtemComponent },
  { path: '**', redirectTo: 'circuit' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
