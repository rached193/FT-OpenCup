import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient) { }

  getInfo(url: string): Observable<any[]> {
    return this.http.get<any[]>(`/assets/jsones/${url}.json`);
  }
}
