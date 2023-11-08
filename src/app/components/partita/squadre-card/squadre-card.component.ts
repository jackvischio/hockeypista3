import { Component, Input, OnChanges } from '@angular/core';
import { PartitaFull, SquadraPartita } from 'src/app/models/partita-full.model';

@Component({
	selector: 'partita-squadre-card',
	templateUrl: './squadre-card.component.html',
	styleUrls: ['./squadre-card.component.css']
})
export class SquadreCardComponent implements OnChanges {
	@Input() partita: PartitaFull = new PartitaFull();

	squadra: SquadraPartita = new SquadraPartita();

	constructor() { }

	ngOnChanges() {
		this.set1();
	}

	set1() {
		this.squadra = this.partita.squadra1;
	}

	set2() {
		this.squadra = this.partita.squadra2;
	}
}
