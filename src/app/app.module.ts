import { MatchService } from './home-router/csgo/cs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
/* CSGO Pages */
import { CsgoComponent } from './home-router/csgo/csgo.component';
import { CsResultsComponent } from './home-router/csgo/cs-results/cs-results.component';
/* Dota Pages */
import { DotaComponent } from './home-router/dota/dota.component';
/* League Pages */
import { LolComponent } from './home-router/lol/lol.component';
/* html templates */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeRouterComponent } from './home-router/home-router.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './shared/auth.service';
import { AuthBlock } from './shared/auth-block.service';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { UserprofileComponent } from './auth/login/userprofile/userprofile.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../environments/environment';
import { UsersService } from './shared/users.service';
import { MatchComponent } from './home-router/csgo/match/match.component';
import { RankingComponent } from './home-router/csgo/ranking/ranking.component';



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
    UserprofileComponent,
    CsResultsComponent,
    MatchComponent,
    RankingComponent
 
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),                   
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxPaginationModule
  ],
  providers: [AuthService,AuthBlock,AngularFireAuth,UsersService,MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
