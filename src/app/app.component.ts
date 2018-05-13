import { AngularFireModule } from 'angularfire2';
import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { fadeAnimation } from './animation';
import { RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent implements OnInit, OnDestroy {
  authUnsub: firebase.Unsubscribe;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

   
    this.authUnsub = this.authService.authChange();
    
  }

  ngOnDestroy() {
    this.authUnsub();
  }

}
