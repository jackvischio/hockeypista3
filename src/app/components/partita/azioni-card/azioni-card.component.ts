import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PartitaFull } from 'src/app/models/partita-full.model';

@Component({
	selector: 'partita-azioni-card',
	templateUrl: './azioni-card.component.html',
	styleUrls: ['./azioni-card.component.css']
})
export class AzioniCardComponent implements OnChanges {

	@Input('partita') partita: PartitaFull = new PartitaFull();

	stile = 0;

	constructor() { }

	ngOnChanges() {
		
	}

}
