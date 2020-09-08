import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  prevColor;

  constructor() { }

  ngOnInit() {
  }

  activeSubmenu() {    
    if(document.getElementById('submenu').style.display === 'none') {
      this.prevColor = document.getElementById('statistics').style.backgroundColor;
      document.getElementById('statistics').style.setProperty('background-color', '#404e5d');
      document.getElementById('submenu').style.setProperty('display', 'flex');
    } else {
      document.getElementById('submenu').style.setProperty('display', 'none');
      document.getElementById('statistics').style.setProperty('background-color', this.prevColor);
    }
  }

  desactiveSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
    document.getElementById('statistics').style.setProperty('background-color', null);
  }

  goSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
    document.getElementById('statistics').style.setProperty('background-color', '#272a2d');
  }

}
