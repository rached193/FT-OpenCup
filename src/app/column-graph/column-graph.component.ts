import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-graph',
  templateUrl: './column-graph.component.html',
  styleUrls: ['./column-graph.component.scss']
})
export class ColumnGraphComponent implements OnInit {
  @ViewChild('chart1', { static: true }) chart1: ElementRef;
  @ViewChild('chart2', { static: true }) chart2: ElementRef;
  @ViewChild('chart3', { static: true }) chart3: ElementRef;

  graph1: Highcharts.Chart;
  graph2: Highcharts.Chart;
  graph3: Highcharts.Chart;

  constructor() { }

  ngOnInit(): void {


    const chartOptions1: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Teams by Temtem (Minor Cup April)'
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
        data: [53, 51, 48, 43, 32, 28, 27, 26, 23, 19, 18, 15, 13, 11, 11, 8]
      }]
    };
    const chartOptions2: Highcharts.Options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Picks/Bans by Temtem (Minor Cup April: Semifinals & Final)'
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
            text: ''
        },
        min: 0/*,
        max: 100*/
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Ban',
        type: 'column',
        color: '#FF0000',
        data: [3, 4, 11, 1, null, 1, 2, null, 4, 1, 1, null, null, null]
    }, {
        name: 'Pick',
        color: '#00FF00',
        type: 'column',
        data: [11, 5, 1, 11, 6, 9, 5, 7, 3, 4, 2, 2, 2, 2]
    }, {
        name: 'Out',
        color: '#999999',
        type: 'column',
        data: [null, 5, null, null, 6, null, 2, null, null, null, 1, null, null, null]
    }]
};
const chartOptions3: Highcharts.Options = {

  title: {
    text: 'Evolution of use (teams %)'
  },

  yAxis: {
    title: {
      text: ''
    },
    min: 0,
        max: 100
  },

  xAxis: {
    categories: ['Minor Cup April', 'Minor Cup May', 'Minor Cup June', 'Minor Cup July', 'Minor Cup August', 'Qualifier September', 'Minor Cup October', 'Qualifier November'],
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    useHTML: true,
        labelFormatter: function(){
            return '<img src="../assets/img/'+this.name+'.png"></img>';                        
        }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      }
    }
  },

  series: [{
    name: 'Volarend',
    type: 'line',
    data: [86.89, null, null, null, null, null, null, null]
  }, {
    name: 'Kinu',
    type: 'line',
    data: [83.61, null, null, null, null, null, null, null]
  }, {
    name: 'Gyalis',
    type: 'line',
    data: [78.69, null, null, null, null, null, null, null]
  }, {
    name: 'Pigepic',
    type: 'line',
    data: [70.49, null, null, null, null, null, null, null]
  }, {
    name: 'Ukama',
    type: 'line',
    data: [52.46, null, null, null, null, null, null, null]
  }, {
    name: 'Raize',
    type: 'line',
    data: [45.9, null, null, null, null, null, null, null]
  }],

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
  }

} ;

    this.graph1 = Highcharts.chart(this.chart1.nativeElement, chartOptions1)
    this.graph2 = Highcharts.chart(this.chart2.nativeElement, chartOptions2)
    this.graph3 = Highcharts.chart(this.chart3.nativeElement, chartOptions3)

  }


}
