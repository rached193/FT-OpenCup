import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;

  graph: Highcharts.Chart;

  constructor() { }

  ngOnInit(): void {


    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Teams by Temtem'
      },
      xAxis: {
        categories: ['Volarend', 'Kinu', 'Gyalis', 'Pigepic', 'Ukama', 'Raize', 'Tuvine', 'Valash', 'Vulcrane', 'Saipat', 'Myx', 'Kalabyss', 'Nidrasil', 'Wiplump', 'Raican', 'Mudrid'],
         labels: {
           useHTML: true,
           formatter() {
             return '<img src="/assets/img/' + this.value + '.png"></img>';
           }
         }
      },
      yAxis: {
        title: {
          text: '% use'
        },
        min: 0,
        max: 100
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Teams',
        type: 'column',
        data: [86.89, 83.61, 78.69, 70.49, 52.46, 45.90, 44.26, 42.62, 37.70, 31.15, 29.51, 24.59, 21.31, 18.03, 18.03, 13.11]
      }]
    }/*
    {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Picks&Bans by Temtem'
    },
    xAxis: {
        categories: ['Volarend', 'Kinu', 'Gyalis', 'Pigepic', 'Ukama', 'Tuvine', 'Valash', 'Saipat', 'Kalabyss', 'Mushook', 'Vulcrane', 'Wiplump', 'Cerneaf', 'Raican'],
        labels: {
        useHTML: true,
        formatter: function(){
            return '<img src="../assets/img/'+this.value+'.png"></img>';                        
        }
    }
    },
    yAxis: {
        title: {
            text: '% rate'
        },
        min: 0,
        max: 100
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Ban',
        data: [3, 4, 11, 1, null, 1, 2, null, 4, 1, 1, null, null, null]
    }, {
        name: 'Pick',
        data: [11, 5, 1, 11, 6, 9, 5, 7, 3, 4, 2, 2, 2, 2]
    }, {
        name: 'Out',
        data: [null, 5, null, null, 6, null, 2, null, null, null, 1, null, null, null]
    }]
}*/ ;

    this.graph = Highcharts.chart(this.chart.nativeElement, chartOptions)

  }


}
