import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRouterComponent } from "./home-router/home-router.component";
import { CsgoComponent } from './csgo/csgo.component';
import { DotaComponent } from './dota/dota.component';
import { LolComponent } from "./lol/lol.component";






export const routes: Routes = [
  
  { path: '', component: HomeRouterComponent },
  { path: 'csgo', component: CsgoComponent },
  { path: 'dota', component: DotaComponent },
  { path: 'lol', component: LolComponent },
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