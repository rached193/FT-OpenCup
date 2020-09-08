import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CircuitComponent } from './circuit.component';


@NgModule({
  declarations: [CircuitComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class CircuitModule { }
