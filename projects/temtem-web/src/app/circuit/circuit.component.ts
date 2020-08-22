import { Component, OnInit } from '@angular/core';
import { CircuitService } from './circuit.service';
import { share, switchMap, tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {

  rowSelected = 0;
  private _infoCircuit = new BehaviorSubject(this.rowSelected);
  infoCircuit$ = this._infoCircuit.pipe(
    switchMap(tournamentId => {
      return this.circuitService.getInfo(tournamentId);
    }),
    tap(data => console.log(data))
  );

  circuitMenu$ = this.circuitService.getMenu().pipe(share());



  constructor(private circuitService: CircuitService) { }

  select(tournamentId) {
    this.rowSelected = tournamentId;
    this._infoCircuit.next(tournamentId);
  }

  ngOnInit(): void {
  }

}
