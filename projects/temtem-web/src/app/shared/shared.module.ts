import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TemtemGraphComponent } from './temtem-graph/temtem-graph.component';
import { TableComponent } from './table/table.component';
import { RowLayoutComponent } from './layout/row-layout/row-layout.component';
import { FlipSection, FlipComponent } from './layout/row-card/row-cardN.component';
import { GraphsModule } from './graphs/graphs.module';



@NgModule({
  declarations: [TemtemGraphComponent, TableComponent, RowLayoutComponent,
    FlipSection, FlipComponent],
  imports: [
    CommonModule,
    GraphsModule,
    MatTableModule
  ],
  exports: [
    TemtemGraphComponent,
    TableComponent,
    RowLayoutComponent,
    FlipSection, FlipComponent


  ]
})
export class SharedModule { }
