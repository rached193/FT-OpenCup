import { Component, OnInit } from '@angular/core';
import { CircuitService } from './circuit.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {

  rowSelected = 0;

  constructor(private circuitService: CircuitService) { }

  infoCircuit$ = this.circuitService.getInfo('circuit_data').pipe(share());

  ngOnInit(): void {
  }

}
