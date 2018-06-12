import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatchService, match } from '../cs.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})


export class MatchComponent implements OnInit {
  _postArrayMatch: match[];
  
  
  constructor(public router:Router, private matchService: MatchService, private route: ActivatedRoute) {
    
  }

  ngOnInit(){
   this.getMatchId();
  }

   getMatchId() :void {
    this.route.params.forEach((params: Params)=> {
      let id = +params['id'];
      
      this.matchService.getMatch(id).subscribe(
        resultArray => this._postArrayMatch = resultArray,
        error => console.log("Error ::" + error)
      )
    })
   }

 

}
