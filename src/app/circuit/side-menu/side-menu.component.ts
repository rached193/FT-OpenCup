import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  tournaments = [
    'FT Open Cup',
    'Minor Cup Apr',
    'Minor Cup May',
    'Minor Cup Jun',
    'Minor Cup Jul',
    'Minor Cup Aug',
    'Qualifier Sep',
    'Minor Cup Oct',
    'Qualifier Nov',
    'Invitational'];
  constructor() { }

  ngOnInit(): void {
  }

}
