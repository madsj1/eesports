import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches, MatchService } from '../../cs.service';
import { results } from "../../cs.service";

@Component({
  selector: 'app-cs-results',
  templateUrl: './cs-results.component.html',
  styleUrls: ['./cs-results.component.css']
})
export class CsResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
