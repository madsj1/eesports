import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {
info='';
  constructor(public router:Router, private authService: AuthService) {
    this.authService.user$.subscribe(info => {this.info = info})
  }

  

  ngOnInit() {
  }

  onLogout(){
    this.authService.Logout();
    this.router.navigate(['/']);
  }
}
