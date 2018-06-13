import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches, MatchService, results } from '../cs.service';


@Component({
  selector: 'app-cs-results',
  templateUrl: './cs-results.component.html',
  styleUrls: ['./cs-results.component.css']
})
export class CsResultsComponent implements OnInit {
  _postArrayResults: results[];

  constructor(public router:Router, private matchService: MatchService) {
  }

  getResults(): void {
    this.matchService.getAllResults().subscribe(
      resultArray => this._postArrayResults = resultArray,
      error => console.log("Error :: " + error)
    )
  }

  ngOnInit() {
    this.getResults();
  }

  selectId(id){
    this.router.navigate(['/csgo/match', id]);
  }

}
