import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  info='';

  constructor(public router:Router, private authService:AuthService) {
    this.authService.user$.subscribe(info => {this.info = info})
  }
  


  ngOnInit() {
  }

}
