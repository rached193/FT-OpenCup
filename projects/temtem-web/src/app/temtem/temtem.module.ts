import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemComponent } from './temtem.component';
import { SharedModule } from '../shared/shared.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';

@NgModule({
  declarations: [TemtemComponent, FilterMenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TemtemComponent]
})
export class TemtemModule { }
