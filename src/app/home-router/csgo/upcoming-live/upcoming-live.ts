import { Component, OnInit } from '@angular/core';
import { MatchService, matches } from '../cs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-upcoming-live',
  templateUrl: './upcoming-live.html',
  styleUrls: ['./upcoming-live.css']
})
export class UpcomingLiveComponent implements OnInit {
  _postArrayMatches: matches[];
  today:number = Date.now();

  constructor(public router:Router, private matchService: MatchService) {
    
  }

  getUpcomingMatches(): void {
    this.matchService.getAllMatches().subscribe(
      resultArray => this._postArrayMatches = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  ngOnInit() {
    this.getUpcomingMatches();
  }

  selectId(id){
    this.router.navigate(['/csgo/match', id]);
  }

}
