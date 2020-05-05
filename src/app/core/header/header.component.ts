import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nigth: boolean;

  constructor(private themingService: ThemingService) { }

  ngOnInit(): void {
  }


  nightMode() {
    this.nigth = !this.nigth;
    if (this.nigth) {
      this.themingService.activeNightMode();
    } else {
      this.themingService.activeLightMode();
    }
  }

}
