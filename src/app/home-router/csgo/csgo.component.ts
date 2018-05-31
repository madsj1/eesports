import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches, MatchService, results } from './cs.service';
import { news } from "./cs.service"



@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css']

})
export class CsgoComponent implements OnInit {
  _postArrayResults: results[];
  _postArray: news[];
  _postArrayMatches: matches[];

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
  getMatches(): void {
    this.matchService.getAllMatches().subscribe(
      resultArray => this._postArrayMatches = resultArray,
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
    this.getMatches();
    this.getResults();
  }

}
