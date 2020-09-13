import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerPadding: number;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--footer-padding', this.footerPadding+'em');
  }

}
