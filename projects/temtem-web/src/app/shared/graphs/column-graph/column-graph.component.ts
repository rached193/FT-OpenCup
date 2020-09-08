import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { callbackify } from 'util';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;

  private graph1: Highcharts.Chart;
  private dataSeries: Highcharts.SeriesOptionsType[];
  private countCategories: number;

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
  @Input() pagination: number;

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
            return '<img src="/assets/img/' + imageUrl + '/' + this.value + '.png" height="40" width="40"></img>';
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
        max: this.prc ? (this.stacked ? 100 : undefined) : undefined
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

    this.countCategories = +this.categories.length - +1;

    this.graph1.xAxis[0].setExtremes(0, this.pagination ? +this.pagination - +1 : this.countCategories);
  }

  public reload(change) {
    if(change === 'left'){
      if ((+this.graph1.xAxis[0].getExtremes().min - +this.pagination) < 0) {
        this.graph1.xAxis[0].setExtremes(0, +this.pagination - +1);
      } else {
        this.graph1.xAxis[0].setExtremes(+this.graph1.xAxis[0].getExtremes().min - +this.pagination, +this.graph1.xAxis[0].getExtremes().max - +this.pagination);
      }
    } else if(change === 'right') {
      if ((+this.graph1.xAxis[0].getExtremes().max + +this.pagination) > this.countCategories) {
        this.graph1.xAxis[0].setExtremes(+this.countCategories - (+this.pagination - +1), this.countCategories);
      } else {
        this.graph1.xAxis[0].setExtremes(+this.graph1.xAxis[0].getExtremes().min + +this.pagination, +this.graph1.xAxis[0].getExtremes().max + +this.pagination);
      }
    }
  }

}
