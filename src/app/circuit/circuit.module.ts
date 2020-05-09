import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [CircuitComponent, SideMenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CircuitModule { }
