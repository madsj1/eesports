import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

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
export interface news {
  title: string;
  description: string;
  link: string;
  date: DateTimeFormat;
}
export interface results {
  event: string;
  maps: string;
  team1: {name: string; crest: string; result: number;}
  team2: {name: string; crest: Url; result: number;}
}

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}  

  getAllNews(): Observable<news[]>{
    return this.http.get<news[]>('http://localhost:3000/')
  }

  getAllResults(): Observable<results[]>{
    return this.http.get<results[]>('http://localhost:3000/results/')
  }
/*
  getAllMatches(): Observable<matches[]> {
    return this.http.get<matches[]>('http://localhost:3000/');
  }
*/
}   