import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CsgoComponent } from './csgo/csgo.component';
import { DotaComponent } from './dota/dota.component';
import { LolComponent } from './lol/lol.component';


@NgModule({
  declarations: [
    AppComponent,
    CsgoComponent,
    DotaComponent,
    LolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
