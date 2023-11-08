import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { CampionatiComponent } from './pages/campionati/campionati.component';
import { CompetizioneComponent } from './pages/competizione/competizione.component';
import { StatisticheArbitriComponent } from './pages/statistiche-arbitri/statistiche-arbitri.component';
import { PartitaComponent } from './pages/partita/partita.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},

  { path: "menu", component: MenuPageComponent },
  { path: "campionati", component: CampionatiComponent },
  { path: "competizione/:id", component: CompetizioneComponent },
  { path: "arbitri", component: StatisticheArbitriComponent },
  { path: "partita/:id", component: PartitaComponent },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
