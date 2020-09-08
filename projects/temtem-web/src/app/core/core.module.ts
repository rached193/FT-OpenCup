import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuMobileComponent } from './header/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, MenuMobileComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent, MatMenuModule, MatIconModule, FooterComponent
  ]
})
export class CoreModule { }
