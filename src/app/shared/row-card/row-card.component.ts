import { Component, OnInit } from '@angular/core';
import { RowLayoutComponent } from '../row-layout/row-layout.component';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.scss']
})
export class RowCardComponent {

  active = false;

  constructor(rowLayoutComponent: RowLayoutComponent) {
    rowLayoutComponent.addCard(this);
  }
}
