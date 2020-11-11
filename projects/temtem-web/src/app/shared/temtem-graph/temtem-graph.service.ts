import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemtemGraphService {

  constructor(private http: HttpClient) { }

  getGraphFiltered(url: string, id: number): Observable<any[]> {
    return this.http.get<any[]>(`${url}/${id}`);
  }

  getGraph(url: string): Observable<any[]> {
    return this.http.get<any[]>(`${url}`);
  }
}
