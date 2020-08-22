import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;

  private graph1: Highcharts.Chart;
  private dataSeries: Highcharts.SeriesOptionsType[];

  @Input() title: string;
  @Input() subtitle: string;
  @Input() colors: string[];
  @Input() categories: string[];
  @Input() set series(value: any[]) {
    if (value.length > 0) {
      this.dataSeries = value;
      this.build();
    }
  }
  @Input() image: string;
  @Input() prc: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.build();
  }

  build() {
    var imageUrl = this.image;
    var labelValue = this.prc ? '%' : '';
    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'line',
        height: 600,
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
      colors: this.colors || Highcharts.defaultOptions.colors,
      xAxis: {
        categories: this.categories,
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
        /*min: 0,
        max: 100,*/
        labels: {
          useHTML: true,
          formatter() {
            return this.value + labelValue;
          },
          style: {
            color: 'var(--main-color)'
          }
        },
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        useHTML: true,
        labelFormatter: function () {
          return '<img src="/assets/img/' + imageUrl + '/' + this.name + '.png" height="32" width="32"></img>';
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          tooltip: {
            valueSuffix: labelValue
          }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      },
      series: this.dataSeries
    };

    this.graph1 = Highcharts.chart(this.chart1.nativeElement, chartOptions1);
  }


}
