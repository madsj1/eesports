import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRouterComponent } from "./home-router/home-router.component";
import { CsgoComponent } from './home-router/csgo/csgo.component';
import { DotaComponent } from './home-router/dota/dota.component';
import { LolComponent } from "./home-router/lol/lol.component";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthBlock } from './shared/auth-block.service';
import { UserprofileComponent } from './auth/login/userprofile/userprofile.component';
import { CsResultsComponent } from './home-router/csgo/cs-results/cs-results.component';
import { MatchComponent } from './home-router/csgo/match/match.component';
import { RankingComponent } from './home-router/csgo/ranking/ranking.component';
import { TeamPageComponent } from './home-router/csgo/team-page/team-page.component';
import { UpcomingLiveComponent } from './home-router/csgo/upcoming-live/upcoming-live';
import { NotfoundComponent } from './notfound404/notfund.component';


export const routes: Routes = [

  { path: '', component: HomeRouterComponent },
  { path: 'csgo', component: CsgoComponent},
  { path: 'csgo/results', component: CsResultsComponent},
  { path: 'csgo/ranking', component: RankingComponent},
  { path: 'csgo/match/:id', component:MatchComponent},
  { path: 'csgo/team/:id', component: TeamPageComponent},
  { path: 'csgo/upcoming', component:UpcomingLiveComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},
  /*   children: [
      { path: 'results', component: CsResultsComponent }
    ]
  }, */
  { path: 'dota', component: DotaComponent },
  { path: 'lol', component: LolComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserprofileComponent, canActivate: [AuthBlock] }
  /* EXAMPLE TO DISABLE ACCESS TO THIS PAGE  { path: 'lol', component: LolComponent, canActivate: [AuthBlock] }, */
];


/* ARRAY EXAMPLE 

 path: '', component: HomeRouterComponent ,
  children:[
  { path: 'csgo', component: CsgoComponent },
  { path: 'dota', component: DotaComponent },
  { path: 'lol', component: LolComponent }
]

}]; */


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}