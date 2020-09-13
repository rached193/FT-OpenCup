import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { SharedModule } from '../shared/shared.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';

@NgModule({
  declarations: [OverviewComponent, FilterMenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
