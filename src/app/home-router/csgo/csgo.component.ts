import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches } from "./cs.service"
import { news } from "./cs.service"
import { results } from "./cs.service";
import { MatchService } from './cs.service';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css'],
  providers: [MatchService]
})
export class CsgoComponent implements OnInit {
  _postsArray: matches[];
  _postArray: news[];
  _postArrayResults: results[];

  p: number = 1;
  someArray = [];
  collection: results[] = this.someArray;

  constructor(public router:Router, private matchService: MatchService) {
    
  }

  getNews(): void {
    this.matchService.getAllNews().subscribe(
      resultArray => this._postArray = resultArray,
      error => console.log("Error :: " + error)
      
    )
  }
  getResults(): void {
    this.matchService.getAllResults().subscribe(
      resultArray => this._postArrayResults = resultArray,
      error => console.log("Error :: " + error)
    )
  }
  /*
  getMatches(): void {
    this.matchService.getAllMatches()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}*/

  ngOnInit() {
    this.getNews();
    this.getResults();
  }

}
