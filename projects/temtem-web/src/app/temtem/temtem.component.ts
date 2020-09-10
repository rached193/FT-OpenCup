import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterMenuService } from './filter-menu/filter-menu.service';

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem.component.html',
  styleUrls: ['./temtem.component.scss']
})
export class TemtemComponent implements OnInit {
  id: number;
  private sub: any;

  temtems: number[] = [110, 137, 54, 141, 89, 58, 26, 133, 85, 50, 140, 18, 56, 36, 69, 144, 87, 104, 59, 22, 128, 12, 114, 94, 53, 11, 9, 34, 49, 28, 129, 112, 71, 41, 38, 161, 108, 30, 106, 45, 134, 142, 123, 31, 131, 40, 93, 21, 118, 101, 55, 115, 35, 17, 8, 57, 27, 24, 74, 88];

  temtemMenu$ = this.service.getMenu();

  constructor(private router: Router, private route: ActivatedRoute, private service: FilterMenuService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] ? +params['id']: 0;
      if(!this.temtems.includes(this.id)){
        this.router.navigate(['statistics/temtem/110']);
      }
   });
   document.getElementById('statistics').style.setProperty('background-color', '#272a2d');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
