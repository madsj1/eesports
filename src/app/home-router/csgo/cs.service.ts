import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

export interface matches {
  id: number;
  team1: {name: string; id: string;};
  team2: {name: string; id; string;};
  event: {name: string; id; string;};
  maps: string[];
  stars: number;
  live: boolean;
}
export interface news {
  title: string;
  description: string;
  link: string;
  date: DateTimeFormat;
}
export interface results {
  id: string;
  team1: {id: string; name: string;}
  team2: {id: string; name: string;}
  result: string;
  event: {name: string; id: string;}
  format: string;
  stars: number;
}

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}  

  getAllNews(): Observable<news[]>{
    return this.http.get<news[]>('http://localhost:3000/')
  }

  getAllMatches(): Observable<matches[]>{
    return this.http.get<matches[]>('http://localhost:3000/matches')
  }

  getAllResults(): Observable<results[]>{
    return this.http.get<results[]>('http://localhosy:3000/results')
  }
  
/*
  getAllMatches(): Observable<matches[]> {
    return this.http.get<matches[]>('http://localhost:3000/');
  }
*/
}   