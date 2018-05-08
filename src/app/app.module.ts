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



@NgModule({
  declarations: [
    AppComponent,
    CsgoComponent,
    DotaComponent,
    LolComponent,
    HeaderComponent,
    FooterComponent,
    HomeRouterComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
