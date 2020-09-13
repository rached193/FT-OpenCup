import { Component, OnInit, Input } from '@angular/core';
import { TemtemMenu } from './filter-menu.service';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

  @Input() listMenu: TemtemMenu[];

  constructor() { }

  desactiveSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
  }

  ngOnInit(): void {
  }

}
