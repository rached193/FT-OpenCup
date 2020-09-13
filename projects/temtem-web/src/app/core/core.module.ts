import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './header/menu/menu.component';
import { MenuMobileComponent } from './header/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [HeaderComponent,  MenuComponent, MenuMobileComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent, MatMenuModule,
  ]
})
export class CoreModule { }
