import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnGraphComponent } from './column-graph/column-graph.component';
import { LineGraphComponent } from './line-graph/line-graph.component';

const deps = [ColumnGraphComponent, LineGraphComponent]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: deps,
  exports: deps
})
export class GraphsModule { }
