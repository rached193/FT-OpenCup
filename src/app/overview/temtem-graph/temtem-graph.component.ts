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

  constructor(private temtemService: TemtemGraphService) { }

  ngOnInit(): void {
    this.temtemService.getGraph(this.url).subscribe(data => {
      console.log(data);
      console.log(this.title);
    });
  }

}
