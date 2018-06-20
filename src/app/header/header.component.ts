import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {
info='';
showRoutes;




  constructor(public router:Router, private authService: AuthService, private route: ActivatedRoute) {
    this.authService.user$.subscribe(info => {this.info = info})
  }

  

  ngOnInit() { 
    this.route.params.subscribe((params)=>{ 
    this.showRoutes= '/csgo/match/' +params['id'];
    this.showRoutes = true;
   });
   }


  onLogout(){
    this.authService.Logout();
    this.router.navigate(['/']);
  }

  
  
}
