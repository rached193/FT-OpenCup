import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface TournamentInfo {
  name: string;
  id: number;
  text: string[];
  link?: {
    img: string;
    title: string;
    url: string;
  };
  table: [{
    rank: string,
    player: string,
    points: number,
    money: number
  }];
}

export interface CircuitMenu {
  name: string;
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient) { }

  getInfo(tournamentID: number): Observable<TournamentInfo> {
    return this.http.get<TournamentInfo[]>(`/assets/jsones/circuit_data.json`).pipe(map(data => data.find(x => x.id === tournamentID)));
  }

  getMenu(): Observable<CircuitMenu[]> {
    return this.http.get<CircuitMenu[]>(`tournament/list`);
  }
}
