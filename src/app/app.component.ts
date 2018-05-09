import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animation';
import { RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent implements OnInit {
  
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBdJ4RhzcotZaJrKLzXoE9MscYgG6EjtcU",
      authDomain: "eesports-bd33a.firebaseapp.com"
    })
  }

  
}
