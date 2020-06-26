import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'flip-front, flip-back',
  template: `<ng-content></ng-content>`,
  styles: [
    `:host{
      display: flex;
      position: relative;
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
  styles: [
    `:host{
      display: block;
      height: 400px;
      width: 100%;
    }

    .flipper {
      position: relative;
      min-width: 200px;
      min-height: 100px;
      margin: 3rem auto;
      transform-style: preserve-3d;
    }
    .sides {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      color: #fff;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
      user-select: none;
    }
    .front {
      background: #eee;
    }
    .back {
      background: #999;
      transform: rotateY(180deg);
    }
    `
  ],
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
