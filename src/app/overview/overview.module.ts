import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemGraphComponent } from './temtem-graph/temtem-graph.component';
import { ColumnGraphComponent } from '../column-graph/column-graph.component';



@NgModule({
  declarations: [TemtemGraphComponent, ColumnGraphComponent],
  imports: [
    CommonModule
  ],
  exports: [TemtemGraphComponent]
})
export class OverviewModule { }
