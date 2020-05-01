import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemtemGraphService {

  constructor(private http: HttpClient) { }

  getGraph(url: string): Observable<any[]> {
    return this.http.get<any[]>(`/assets/jsones/${url}.json`);
  }
}
