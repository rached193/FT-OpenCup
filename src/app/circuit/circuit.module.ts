import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuMobileComponent } from './side-menu-mobile/side-menu-mobile.component';


@NgModule({
  declarations: [CircuitComponent, SideMenuComponent, SideMenuMobileComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CircuitModule { }
