import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent implements OnInit {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;

  private graph1: Highcharts.Chart;
  private dataSeries: Highcharts.SeriesOptionsType[];

  @Input() title: string;
  @Input() colors: string[];
  @Input() legend: boolean;
  @Input() categories: string[];
  @Input() set series(value: any[]) {
    if (value.length > 0) {
      this.dataSeries = value;
      this.build();
    }
  }
  @Input() stacked: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.build();
  }

  build() {
    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Poppins, Open Sans, sans-serif'
        }
      },
      title: {
        text: this.title,
      },
      credits: {
        enabled: false
      },
      colors: this.colors || ['dimgray'],
      xAxis: {
        categories: this.categories,
        labels: {
          rotation: 0,
          overflow: 'allow',
          useHTML: true,
          formatter() {
            return '<img src="/assets/img/' + this.value + '.png" height="32" width="32"></img>';
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        min: 0
      },
      plotOptions: {
        column: {
          stacking: this.stacked ? 'normal' : undefined
        }
      },
      legend: {
        enabled: this.legend
      },
      series: this.dataSeries
    };

    this.graph1 = Highcharts.chart(this.chart1.nativeElement, chartOptions1);
  }


}
