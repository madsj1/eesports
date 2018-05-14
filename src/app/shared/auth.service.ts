import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';



@Injectable()
export class AuthService {

 
    user$;

    constructor(private router: Router, public afAuth:AngularFireAuth, public af: AngularFireDatabase) {
        this.user$ = afAuth.authState;

        this.user$.subscribe( us => {
            if(us){
              return this.save(us);}
              return [];
            }) 

           
          
    }
    save(user){
        console.log(user)
        this.af.object('users/'+user.uid).update({
          id: user.uid,
          email:user.email
        })
      
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
              console.log(displayName);
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
        .then(
            response =>{
                this.router.navigate(['/'])
            }
        )
       
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