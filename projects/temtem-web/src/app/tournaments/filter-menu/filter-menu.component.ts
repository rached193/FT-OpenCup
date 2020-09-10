import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CircuitMenu } from '../tournaments.service';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

  @Input() listMenu: CircuitMenu[];

  @Output() menuSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(index) {
    this.menuSelected.emit(index);
  }

  desactiveSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
  }

}
