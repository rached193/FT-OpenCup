import { Component, OnInit, Input } from '@angular/core';
import { RowCardComponent } from '../row-card/row-card.component';

@Component({
  selector: 'app-row-layout',
  templateUrl: './row-layout.component.html',
  styleUrls: ['./row-layout.component.scss']
})
export class RowLayoutComponent implements OnInit {

  hiddenFace = true;
  cards: RowCardComponent[] = [];
  @Input() cardMode: boolean;

  ngOnInit(): void {

  }

  addCard(card: RowCardComponent): void {
    if (this.cards.length === 0) {
      card.active = true;
    }
    this.cards.push(card);
  }

  clickButton() {
    this.hiddenFace = !this.hiddenFace;
    if (this.hiddenFace) {
      this.selectCard(0);
    } else {
      this.selectCard(1);
    }
  }

  private selectCard(cardIndex: number): void {
    this.cards.forEach((card) => {
      card.active = false;
    });
    this.cards[cardIndex].active = true;
  }

}
