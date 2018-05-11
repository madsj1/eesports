import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }

    public authChange(): firebase.Unsubscribe {
        return firebase.auth().onAuthStateChanged(
          (user: firebase.User) => {
            if (user) {
              this.getToken();
            } else {
              this.token = null;
            }
          }
        );
      }

      getUserData (){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;

              console.log('email: '+ email,providerData);
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
          
      }

    token: string;
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
       
    }

    LoginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);    
                    console.log(response)
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    Logout() {
        firebase.auth().signOut();
        this.token = null;
        console.log("logged out")
        
    }

 

 

    

  
}