import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CircuitMenu } from '../tournaments.service';


@Component({
  selector: 'app-side-menu-mobile',
  templateUrl: './side-menu-mobile.component.html',
  styleUrls: ['./side-menu-mobile.component.scss']
})
export class SideMenuMobileComponent implements OnInit, OnDestroy {

  @Input() listMenu: CircuitMenu[];

  @Output() menuSelected = new EventEmitter();

  hiddenMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(index) {
    this.hiddenMenu = true;
    document.body.style.position = this.hiddenMenu ? 'relative' : 'fixed';
    this.menuSelected.emit(index);
  }

  activeMenu() {
    this.hiddenMenu = !this.hiddenMenu;
    document.body.style.position = this.hiddenMenu ? 'relative' : 'fixed';
  }

  ngOnDestroy(): void {
    document.body.style.position =  'relative';
  }


}
