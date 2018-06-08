import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

export interface matches {
  id: number;
  date:string;
  team1: {name: string; id: string;};
  team2: {name: string; id; string;};
  format: string;
  event: {name: string; id; string;};
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
  id: number;
  team1: {id: string; name: string;}
  team2: {id: string; name: string;}
  result: string;
  event: {name: string; id: string;}
  format: string;
  stars: number;
}

export interface ranking{
  points: string;
  place: string;
  team: {name: string; id: string;}
  change: string;
  isNew: boolean;
}

export interface streams{
  name: string;
  category: string;
  country: {name: string; code: string;}
  viewers: string;
  hltvLink: string;
}

export interface match{
  team1:{
    name:string,
    id:number
  }
  team2:{
    name:string,
    id:number
  }
  winnerTeam:{}
  date: string;
  format: string;
  additionalInfo: string;
  event: {
    name:string,
    id:number
  }
  maps: [{}];
  players: {team1:[{name1:string; id1:number; name2:string; id2:number; name3:string; id3:number; name4:string; id4:number; name5:string; id5:number;}];
            team2:[{name1:string; id1:number; name2:string; id2:number; name3:string; id3:number; name4:string; id4:number; name5:string; id5:number;}]}
  streams:[{}];
  live: string;
  hasScorebot: boolean;
  highlightedPlayer: {name:string; id:number}
  headToHead:[{date:string;
              winner:{name:string; id:number;}
              event:{name:string; id:number;}
              map:string;
              result:string;
              }];
  vetos:[{team1:{name:string; id:number;}
          map:string;
          type:string;
          team2:{name:string; id:number;}
          map1:string;
          type1:string;}];
  highlights:[{}];
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
    return this.http.get<results[]>('http://localhost:3000/results')
  }

  getRanking(): Observable<ranking[]>{
    return this.http.get<ranking[]>('http://localhost:3000/ranking')
  }

  getStreams(): Observable<streams[]>{
    return this.http.get<streams[]>('http://localhost:3000/streams')
  }

  getMatch(id:number): Observable<match[]>{
    return this.http.get<match[]>(`http://localhost:3000/match/${id}`)
  }
  
/*
  getAllMatches(): Observable<matches[]> {
    return this.http.get<matches[]>('http://localhost:3000/');
  }
*/
}   