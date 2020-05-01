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
  @Input() serieName: string;
  @Input() valueName: string;
  @Input() legentTarget: string;

  categories = [];
  series = [];

  constructor(private temtemService: TemtemGraphService) { }

  ngOnInit(): void {

    if (this.legentTarget) {
    }

    this.temtemService.getGraph(this.url).subscribe(data => {
      console.log(data);
      this.buildGraph(data);
    });
  }

  private buildGraph(content) {
    const categories = [];
    content.forEach(item => {
      if (!categories.includes(item[this.categoryName])) {
        categories.push(item[this.categoryName]);
      }
    });

    const seriesGrouped = this.groupBy(content, this.serieName);
    const series = [];
    for (const serie in seriesGrouped) {
      if (seriesGrouped.hasOwnProperty(serie)) {
        series.push({
          name: serie,
          data: seriesGrouped[serie].map(x => x[this.valueName])
        });
      }
    }

    console.log(series);

    this.categories = categories;
    this.series = series;
  }

  private groupBy(xs, key) {
    // tslint:disable-next-line: only-arrow-functions
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
