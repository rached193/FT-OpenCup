import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CircuitMenu } from '../tournaments.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() listMenu: { CircuitMenu: string }[];

  @Output() menuSelected = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(index) {
    this.menuSelected.emit(index);
  }


}
