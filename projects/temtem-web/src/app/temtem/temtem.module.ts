import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemComponent } from './temtem.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TemtemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TemtemComponent]
})
export class TemtemModule { }
