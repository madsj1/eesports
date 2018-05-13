import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface matches {
  name: string;
  id: number;
  team1: string;
  team2: string;
  date: number;
  format: string,
  event: string;
  maps: string[];
  title: string;
  live: boolean;
  stars: number;
}

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}

  getAllMatches(): Observable<matches[]> {
    return this.http.get<matches[]>('http://localhost:3000/');
  }
}   