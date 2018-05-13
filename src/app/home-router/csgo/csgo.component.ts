import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches } from "./cs.service"
import { MatchService } from './cs.service';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css'],
  providers: [MatchService]
})
export class CsgoComponent implements OnInit {
  _postsArray: matches[];

  constructor(public router:Router, private matchService: MatchService) {
    
  }
  
  getMatches(): void {
    this.matchService.getAllMatches()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}

  ngOnInit() {
    this.getMatches();
  }

}
