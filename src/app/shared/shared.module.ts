import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemGraphComponent } from './temtem-graph/temtem-graph.component';
import { GraphsModule } from '../graphs/graphs.module';



@NgModule({
  declarations: [TemtemGraphComponent],
  imports: [
    CommonModule,
    GraphsModule
  ],
  exports: [TemtemGraphComponent]
})
export class SharedModule { }
