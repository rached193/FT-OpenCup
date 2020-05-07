import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemComponent } from './temtem.component';
import { SharedModule } from '../shared/shared.module';
import { TableTemtemComponent } from './table/table.component';



@NgModule({
  declarations: [TemtemComponent, TableTemtemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TemtemComponent]
})
export class TemtemModule { }
