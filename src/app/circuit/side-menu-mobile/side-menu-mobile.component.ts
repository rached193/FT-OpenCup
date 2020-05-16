import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-side-menu-mobile',
  templateUrl: './side-menu-mobile.component.html',
  styleUrls: ['./side-menu-mobile.component.scss']
})
export class SideMenuMobileComponent implements OnInit {

  @Input() listMenu: { menu: string }[];

  @Output() menuSelected = new EventEmitter();

  hiddenMenu = true;


  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(index) {
    this.hiddenMenu = true;
    this.menuSelected.emit(index);
  }

  activeMenu() {
    this.hiddenMenu = !this.hiddenMenu;
  }


}
