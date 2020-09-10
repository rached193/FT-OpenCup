import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterMenuService } from './filter-menu/filter-menu.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  id: number;
  private sub: any;

  tournaments: number[] = [0, 1, 2, 3, 4, 5, 6];

  circuitMenu$ = this.service.getMenu();

  constructor(private router: Router, private route: ActivatedRoute, private service: FilterMenuService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] ? +params['id']: 0;
      if(!this.tournaments.includes(this.id)){
        this.router.navigate(['statistics/overview']);
      }
   });
   document.getElementById('statistics').style.setProperty('background-color', '#272a2d');
   document.getElementById('statOverview').style.setProperty('background-color', '#272a2d');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
