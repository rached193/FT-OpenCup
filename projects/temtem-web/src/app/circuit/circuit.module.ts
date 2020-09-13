import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CircuitComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CircuitModule { }
