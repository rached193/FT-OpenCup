import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TournamentsComponent } from './tournaments.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuMobileComponent } from './side-menu-mobile/side-menu-mobile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TournamentsComponent, SideMenuComponent, SideMenuMobileComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    RouterModule
  ]
})
export class TournamentsModule { }
