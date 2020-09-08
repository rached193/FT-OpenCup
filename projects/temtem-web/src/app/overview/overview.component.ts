import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  id: number;
  private sub: any;

  tournaments: number[] = [0, 1, 2, 3, 4, 5, 6];

  hiddenMenu = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] ? +params['id']: 0;
      if(!this.tournaments.includes(this.id)){
        this.id = 0;
      }
   });
   document.getElementById('statistics').style.setProperty('background-color', '#272a2d');
  }

  activeMenu() {
    this.hiddenMenu = !this.hiddenMenu;
    document.getElementById('menuFilter').style.setProperty('display', this.hiddenMenu ? 'none' : null);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
