import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem.component.html',
  styleUrls: ['./temtem.component.scss']
})
export class TemtemComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] ? +params['id']: 0;
   });
   document.getElementById('statistics').style.setProperty('background-color', '#272a2d');
  }

}
