import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CircuitMenu {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterMenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<CircuitMenu[]> {
    return this.http.get<CircuitMenu[]>(`back/tournament/filter`);
  }
}
