import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'app-spider-graph',
  templateUrl: './spider-graph.component.html',
  styleUrls: ['./spider-graph.component.scss']
})
export class SpiderGraphComponent implements OnInit {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;

  private graph1: Highcharts.Chart;
  private dataSeries: Highcharts.SeriesOptionsType[];

  @Input() title: string;
  @Input() subtitle: string;
  @Input() colors: string[];
  @Input() legend: boolean;
  @Input() categories: string[];
  @Input() set series(value: any[]) {
    if (value.length > 0) {
      this.dataSeries = value;
      this.build();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  build() {
    const chartOptions1: Highcharts.Options = {
      chart: {
        polar: true,
        type: 'area',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Poppins, Open Sans, sans-serif',
          color: 'var(--main-color) !important'
        }
      },
      title: {
        text: this.title,
        style: {
          color: 'var(--main-color)'
        }
      },
      credits: {
        enabled: false
      },
      colors: Highcharts.defaultOptions.colors,
      xAxis: {
        categories: this.categories,
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
          style: {
            color: 'var(--main-color)'
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 120,
        labels: {
          style: {
            color: 'var(--main-color)'
          }
        },
      },
      tooltip: {
        shared: true
      },
      legend: {
        itemStyle: {
          color: 'var(--main-color)',
        },
        enabled: this.legend,
      },
      series: this.dataSeries
    };

    this.graph1 = Highcharts.chart(this.chart1.nativeElement, chartOptions1);
  }

}
