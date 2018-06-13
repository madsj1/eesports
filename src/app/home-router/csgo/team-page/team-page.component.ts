import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatchService, match, team } from '../cs.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
  _postArrayTeam: team[];

  constructor(public router:Router, private matchService: MatchService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getTeamId();
  }

  getTeamId() :void {
    this.route.params.forEach((params: Params)=> {
      let id = +params['id'];
      
      this.matchService.getTeam(id).subscribe(
        resultArray => this._postArrayTeam = resultArray,
        error => console.log("Error ::" + error)
      )
    })
   }

}
