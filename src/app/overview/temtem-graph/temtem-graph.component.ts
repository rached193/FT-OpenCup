import { Component, OnInit, Input } from '@angular/core';
import { TemtemGraphService } from './temtem-graph.service';

@Component({
  selector: 'app-temtem-graph',
  templateUrl: './temtem-graph.component.html',
  styleUrls: ['./temtem-graph.component.scss']
})
export class TemtemGraphComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() categoryName: string;

  categories = [];
  series = [];

  constructor(private temtemService: TemtemGraphService) { }

  ngOnInit(): void {
    this.temtemService.getGraph(this.url).subscribe(data => {
      console.log(data);
      console.log(this.categoryName);

      const categories = [];
      data.forEach(item => {
        if (!categories.includes(item[this.categoryName])) {
          categories.push(item[this.categoryName]);
        }
      });

      this.categories = categories;
      this.series = data;

      console.log(this.categories);

    });
  }

}
