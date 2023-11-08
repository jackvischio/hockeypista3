import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ScoreboardComponent } from './components/partita/scoreboard/scoreboard.component';
import { AzioniComponent } from './components/partita/azioni/azioni.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { CampionatiComponent } from './pages/campionati/campionati.component';
import { LoadingComponent } from './components/general/loading/loading.component';
import { CompetizioneComponent } from './pages/competizione/competizione.component';
import { GironeUnicoComponent } from './components/calendario/girone-unico/girone-unico.component';
import { StatisticheArbitriComponent } from './pages/statistiche-arbitri/statistiche-arbitri.component';
import { CalendarioComponent } from './pages/competizione/calendario/calendario.component';
import { PartitaCalendarioComponent } from './components/calendario/partita-calendario/partita-calendario.component';
import { NavbarCampionatoComponent } from './components/general/navbar-campionato/navbar-campionato.component';
import { SquadreCompetizioneComponent } from './pages/competizione/squadre-competizione/squadre-competizione.component';
import { ClassificaComponent } from './pages/competizione/classifica/classifica.component';
import { MarcatoriComponent } from './pages/competizione/marcatori/marcatori.component';
import { NavbarPartitaComponent } from './components/general/navbar-partita/navbar-partita.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PartitaService } from './services/partita.service';
import { SquadraService } from './services/squadra.service';
import { CalendarioService } from './services/calendario.service';
import { DesignazioniService } from './services/designazioni.service';
import { CampionatiService } from './services/campionati.service';
import { ClassificaService } from './services/classifica.service';
import { SalvatiService } from './services/salvati.service';
import { StagioneService } from './services/stagione.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { PartitaComponent } from './pages/partita/partita.component';
import { AzioniCardComponent } from './components/partita/azioni-card/azioni-card.component';
import { AzioniTimelineComponent } from './components/partita/azioni-timeline/azioni-timeline.component';
import { SquadreCardComponent } from './components/partita/squadre-card/squadre-card.component';
import { SquadraComponent } from './components/partita/squadra/squadra.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PartitaComponent,
		NotFoundComponent,
		ScoreboardComponent,
		AzioniComponent,
		MenuPageComponent,
		CampionatiComponent,
		LoadingComponent,
		CompetizioneComponent,
		GironeUnicoComponent,
		StatisticheArbitriComponent,
		CalendarioComponent,
		PartitaCalendarioComponent,
		NavbarCampionatoComponent,
		SquadreCompetizioneComponent,
		ClassificaComponent,
		MarcatoriComponent,
		NavbarPartitaComponent,
		LoadingComponent,
		AzioniCardComponent,
		AzioniTimelineComponent,
		SquadreCardComponent,
		SquadraComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		RouterModule
	],
	providers: [
		PartitaService, 
		SquadraService,
		CalendarioService,
		DesignazioniService,
		CampionatiService,
		ClassificaService,
		SalvatiService,
		SquadraService,
		StagioneService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
