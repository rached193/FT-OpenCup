import { Component, OnInit } from '@angular/core';
import { CircuitService } from './circuit.service';
import { share, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {


  private _infoCircuit = new Subject();
  infoCircuit$ = this._infoCircuit.pipe(
    switchMap(tournamentId => {
      return this.circuitService.getInfo(tournamentId);
    })
  )


  circuitMenu$ = this.circuitService.getMenu().pipe(share());

  rowSelected = 0;

  constructor(private circuitService: CircuitService) { }

  select(index) {
    this.rowSelected = index;
  }

  ngOnInit(): void {
  }

}
