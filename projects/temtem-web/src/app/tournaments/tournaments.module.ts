import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsComponent } from './tournaments.component';
import { SharedModule } from '../shared/shared.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';

@NgModule({
  declarations: [TournamentsComponent, FilterMenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TournamentsModule { }
