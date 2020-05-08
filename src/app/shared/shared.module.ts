import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TemtemGraphComponent } from './temtem-graph/temtem-graph.component';
import { GraphsModule } from '../graphs/graphs.module';
import { TableComponent } from './table/table.component';
import {MatCardModule} from '@angular/material/card';



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

    MatTableModule,
    MatCardModule
  ]
})
export class SharedModule { }
