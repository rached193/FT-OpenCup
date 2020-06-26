import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'flip-front, flip-back',
  template: `<ng-content></ng-content>`,
  styles: [
    `:host{
      display: flex;
      position: relative;
      height: 100%;
    }
    `
  ]
})
export class FlipSection { }

@Component({
  selector: 'flip',
  template: `
    <div class="card-button">
        <button (click)="toggle()"> {{true? 'Relative': 'Absolute'}} </button>
    </div>
      <div class="flipper" [@flip]="flip">
        <div class="sides front">
          <ng-content select="flip-front"></ng-content>
        </div>
        <div class="sides back">
          <ng-content select="flip-back"></ng-content>
        </div>
      </div>
  `,
  styleUrls:['./row-card.component.scss'],
  animations: [
    trigger('flip', [
      state('flipped', style({ transform: 'rotateY(180deg)' })),
      state('unflipped', style({ transform: 'rotateY(0)' })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class FlipComponent {
  flip = 'unflipped';
  toggle() {
    this.flip = (this.flip === 'unflipped') ? 'flipped' : 'unflipped';
  }
}
