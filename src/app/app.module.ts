import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PartitaComponent } from './pages/partita/partita.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PartitaService } from './services/partita.service';
import { ScoreboardComponent } from './components/partita/scoreboard/scoreboard.component';
import { LuogoArbitriComponent } from './components/partita/luogoarbitri/luogoarbitri.component';
import { AzioniComponent } from './components/partita/azioni/azioni.component';
import { SquadraComponent } from './components/partita/squadra/squadra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PartitaComponent,
    NotFoundComponent,
    ScoreboardComponent,
    LuogoArbitriComponent,
    AzioniComponent,
    SquadraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PartitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
