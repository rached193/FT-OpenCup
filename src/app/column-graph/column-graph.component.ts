import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent implements OnInit {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;


  graph1: Highcharts.Chart;

  @Input() title: string;


  constructor() { }

  ngOnInit(): void {


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
      colors: ['dimgray'],
      xAxis: {
        categories: ['Volarend', 'Kinu', 'Gyalis', 'Pigepic', 'Ukama', 'Raize', 'Tuvine', 'Valash'],
        labels: {
          rotation: 0,
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
      legend: {
        enabled: false
      },
      series: [{
        name: 'Teams',
        type: 'column',
        data: [53, 51, 48, 43, 32, 28, 27, 26]
      }]
    };

    this.graph1 = Highcharts.chart(this.chart1.nativeElement, chartOptions1);

  }


}
