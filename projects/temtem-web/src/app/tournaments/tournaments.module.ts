import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TournamentsComponent } from './tournaments.component';
import { SharedModule } from '../shared/shared.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TournamentsComponent, FilterMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    RouterModule
  ]
})
export class TournamentsModule { }
