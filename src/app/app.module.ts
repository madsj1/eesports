import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CsgoComponent } from './home-router/csgo/csgo.component';
import { DotaComponent } from './home-router/dota/dota.component';
import { LolComponent } from './home-router/lol/lol.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRouterComponent } from './home-router/home-router.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth/auth.service';
import { AuthBlock } from './auth/auth-block.service';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { UserprofileComponent } from './auth/login/userprofile/userprofile.component';

export const firebaseConfig = {
      apiKey: "AIzaSyBdJ4RhzcotZaJrKLzXoE9MscYgG6EjtcU",
      authDomain: "eesports-bd33a.firebaseapp.com",
      databaseURL: "https://eesports-bd33a.firebaseio.com",
      projectId: "eesports-bd33a",
      storageBucket: "eesports-bd33a.appspot.com",
      messagingSenderId: "736423362457"
};


@NgModule({
  declarations: [
    AppComponent,
    CsgoComponent,
    DotaComponent,
    LolComponent,
    HeaderComponent,
    FooterComponent,
    HomeRouterComponent,
    SignupComponent,
    LoginComponent,
    UserprofileComponent
 
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),                     
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,AuthBlock,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
