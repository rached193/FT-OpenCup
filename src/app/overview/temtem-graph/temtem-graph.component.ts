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
  @Input() subtitle: string;
  @Input() type: string;
  @Input() colors: string[];
  @Input() stacked: boolean;
  @Input() categoryName: string;
  @Input() serieName: string;
  @Input() valueName: string;
  @Input() legend: boolean;

  @Input() top: number;

  categories = [];
  series = [];

  constructor(private temtemService: TemtemGraphService) { }

  ngOnInit(): void {

    this.temtemService.getGraph(this.url).subscribe(data => {
      console.log(data);
      this.buildGraph(data);
    });
  }

  private buildGraph(content: any[]) {

    const seriesGrouped = this.groupBy(content, this.serieName);
    const categories = this.calculateCategories(seriesGrouped, content);

    const series = [];
    for (const key in seriesGrouped) {
      if (seriesGrouped.hasOwnProperty(key)) {
        const serieStore = new Array(categories.length).fill(null);
        seriesGrouped[key].forEach(item => {
          const index = categories.findIndex(x => x === item[this.categoryName]);
          if (index !== -1) {
            serieStore[index] = item[this.valueName];
          }
        });
        series.push({
          name: key,
          data: serieStore
        });
      }
    }

    console.log(series);

    this.categories = categories;
    this.series = series;
  }


  private calculateCategories(seriesGrouped, content): string[] {
    const categories = [];
    if (this.top) {

      const firstKey = Object.keys(seriesGrouped)[0];

      const sortContent = seriesGrouped[firstKey].sort((a, b) => {
        return b[this.valueName] - a[this.valueName];
      });
      const topContent = sortContent.slice(0, this.top);

      topContent.forEach(item => {
        if (!categories.includes(item[this.categoryName])) {
          categories.push(item[this.categoryName]);
        }
      });

    } else {
      content.forEach(item => {
        if (!categories.includes(item[this.categoryName])) {
          categories.push(item[this.categoryName]);
        }
      });
    }

    return categories;
  }

  private groupBy(xs, key) {
    // tslint:disable-next-line: only-arrow-functions
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
