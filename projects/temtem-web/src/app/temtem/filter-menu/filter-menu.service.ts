import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TemtemMenu {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterMenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<TemtemMenu[]> {
    return this.http.get<TemtemMenu[]>(`back/temtem/filter`);
  }
}
