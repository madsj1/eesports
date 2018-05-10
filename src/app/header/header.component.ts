import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, private authService: AuthService) { }

  

  ngOnInit() {
  }

  onLogout(){
    this.authService.Logout();
    this.router.navigate(['/']);
  }
}
