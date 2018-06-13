import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { matches, MatchService, results, ranking, streams, match } from '../cs.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  _postArrayRanking: ranking[];

  constructor(public router:Router, private matchService: MatchService,  private route: ActivatedRoute) { }

  
  getRanking(): void {
    this.matchService.getRanking().subscribe(
      resultArray => this._postArrayRanking = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  ngOnInit() {
    this.getRanking();
  }

  selectId(id){
    this.router.navigate(['/csgo/team', id]);
  }

}
