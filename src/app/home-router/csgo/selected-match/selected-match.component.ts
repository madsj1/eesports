import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-match',
  templateUrl: './selected-match.component.html',
  styleUrls: ['./selected-match.component.css']
})
export class SelectedMatchComponent implements OnInit {

  router: any;
  constructor() { }

  viewDetails(match_id: any){
    let url: string = "/match/" + match_id;
      this.router.navigateByUrl(url)
  }

  ngOnInit() {
  }

}
