import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CircuitMenu } from './filter-menu.service';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

  @Input() listMenu: CircuitMenu[];

  constructor() { }

  desactiveSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
  }

  ngOnInit(): void {
  }

}
