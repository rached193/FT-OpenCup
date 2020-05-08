import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TemtemComponent } from './temtem/temtem.component';
import { CircuitComponent } from './circuit/circuit.component';


const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'circuit', component: CircuitComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'temtem', component: TemtemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
