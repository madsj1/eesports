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
  /*   firebase.initializeApp({
      apiKey: "AIzaSyBdJ4RhzcotZaJrKLzXoE9MscYgG6EjtcU",
      authDomain: "eesports-bd33a.firebaseapp.com",
      databaseURL: "https://eesports-bd33a.firebaseio.com",
      projectId: "eesports-bd33a",
      storageBucket: "eesports-bd33a.appspot.com",
      messagingSenderId: "736423362457"

      
    }); */
   
    this.authUnsub = this.authService.authChange();
    
  }

  ngOnDestroy() {
    this.authUnsub();
  }

}
