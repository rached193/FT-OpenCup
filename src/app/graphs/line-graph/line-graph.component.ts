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
  @Input() colors: string[];
  @Input() categories: string[];
  @Input() set series(value: any[]) {
    if (value.length > 0) {
      this.dataSeries = value;
      this.build();
    }
  }

  constructor() { }

  ngOnInit(): void {
    // this.build();
    console.log(this.colors)
  }

  build() {
    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'line',
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
      colors: Highcharts.defaultOptions.colors,
      xAxis: {
        categories: this.categories,
      },
      yAxis: {
        title: {
          text: ''
        },
        min: 0,
        max: 100,
        labels: {
          useHTML: true,
          formatter() {
            return this.value + '%';
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<img src="../assets/img/' + this.name + '.png" height="32" width="32"></img>';
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          tooltip: {
            valueSuffix: '%'
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
