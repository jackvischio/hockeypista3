import { Component, Input } from '@angular/core';
import { GiocatorePartita, PartitaFull } from 'src/app/models/partita-full.model';

@Component({
	selector: 'partita-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
	@Input('partita') partita: PartitaFull = new PartitaFull();

	constructor() {}

	calcolaCartellini(tipo: string, giocatori: GiocatorePartita[]): number {
		let totale = 0;
		giocatori.forEach((gioc: GiocatorePartita) => {
			try {
				totale += (tipo == 'blu' ? gioc.blu : gioc.rossi);
			} catch(e) { }
		});
		return totale;
	}

	calcolaTiri(tipo: string, giocatori: GiocatorePartita[]): string {
		let fatti = 0;
		let totale = 0;
		giocatori.forEach((gioc: GiocatorePartita) => {
			try {
				let s = (tipo == 'diretti' ? gioc.diretti : gioc.rigori).split('/');
				fatti += Number(s[0]);
				totale += Number(s[1]);
			} catch(e) { }
		});
		return fatti + '/' + totale;
	}
}
