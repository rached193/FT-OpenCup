import { Component, OnInit } from '@angular/core';
import { TournamentsService } from './tournaments.service';
import { share, switchMap, tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  hiddenMenu = false;

  rowSelected = 0;
  private _infoCircuit = new BehaviorSubject(this.rowSelected);
  infoCircuit$ = this._infoCircuit.pipe(
    switchMap(tournamentId => {
      return this.TournamentsService.getInfo(tournamentId);
    }),
    tap(data => console.log(data))
  );

  circuitMenu$ = this.TournamentsService.getMenu().pipe(share());



  constructor(private TournamentsService: TournamentsService) { }

  select(tournamentId) {
    this.rowSelected = tournamentId;
    this._infoCircuit.next(tournamentId);
  }

  activeMenu() {
    this.hiddenMenu = !this.hiddenMenu;
    document.getElementById('menuFilter').style.setProperty('display', this.hiddenMenu ? 'none' : null);
  }

  desactiveSubmenu() {
    document.getElementById('submenu').style.setProperty('display', 'none');
  }

  ngOnInit() {
  }

}
