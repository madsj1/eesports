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
  _postArrayMatch: match[];
  pic: string;
  constructor(public router:Router, private matchService: MatchService, private route: ActivatedRoute) { 
    
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

   setDefaultPic(id){
    return this.pic = "https://static.hltv.org/images/playerprofile/thumb/"+id+"/400.jpeg?v=2"
   }

   selectId(id){
    this.router.navigate(['/csgo/match', id]);
  }

   ngOnInit() {
    this.getTeamId();
  }

}
