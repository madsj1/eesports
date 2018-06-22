import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { matches, MatchService, results, ranking, streams, match } from './cs.service';
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
  _postArrayStreams: streams[];
  _postArrayMatch: match[];
  _postArrayRanking: ranking[];
  today:number = Date.now();


  constructor(public router:Router, private matchService: MatchService) {
    
  }

/*   getNews(): void {
    this.matchService.getAllNews().subscribe(
      resultArray => this._postArray = resultArray,
      error => console.log("Error :: " + error)
    )
  } */
  getMatches(): void {
    this.matchService.getAllMatches().subscribe(
      resultArray => this._postArrayMatches = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  getStreams(): void {
    this.matchService.getStreams().subscribe(
      resultArrayn => this._postArrayStreams = resultArrayn,
      error => console.log("Error :: " + error)
    )
  }

  getResults(): void {
    this.matchService.getAllResults().subscribe(
      resultArray => this._postArrayResults = resultArray,
      error => console.log("Error :: " + error)
    )
  }
  getRanking(): void {
    this.matchService.getRanking().subscribe(
      resultArray => this._postArrayRanking = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  selectId(id){
    this.router.navigate(['/csgo/match', id]);
  }

  selectTeamId(id){
    this.router.navigate(['/csgo/team', id]);
  }



  ngOnInit() {
   /*  this.getNews(); */
    this.getStreams();
    this.getResults();
    this.getRanking();
    this.getMatches();
  }

}
