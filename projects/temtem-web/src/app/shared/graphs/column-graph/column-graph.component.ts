import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent {
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
  @Input() stacked: boolean;
  @Input() image: string;
  @Input() prc: boolean;

  constructor() {}

  build() {
    const imageUrl = this.image;
    const labelValue = this.prc ? '%' : '';
    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'column',
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
      subtitle: {
        text: this.subtitle,
        style: {
          color: 'var(--main-color)'
        }
      },
      credits: {
        enabled: false
      },
      colors: this.colors || ['var(--main-color)'],
      xAxis: {
        categories: this.categories,
        labels: {
          rotation: 0,
          overflow: 'allow',
          useHTML: true,
          formatter() {
            return '<img src="/assets/img/' + imageUrl + '/' + this.value + '.png" height="32" width="32"></img>';
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          useHTML: true,
          formatter() {
            return this.value + labelValue;
          },
          style: {
            color: 'var(--main-color)'
          }
        },
        min: 0,
        max: this.prc ? 100 : undefined
      },
      plotOptions: {
        column: {
          stacking: this.stacked ? 'normal' : undefined
        },
        series: {
          tooltip: {
            valueSuffix: labelValue
          }
        }
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