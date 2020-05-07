import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TemtemGraphComponent } from './temtem-graph/temtem-graph.component';
import { GraphsModule } from '../graphs/graphs.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [TemtemGraphComponent, TableComponent],
  imports: [
    CommonModule,
    GraphsModule,
    MatTableModule
  ],
  exports: [
    TemtemGraphComponent,
    TableComponent,

    MatTableModule
  ]
})
export class SharedModule { }
