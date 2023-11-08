import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AzionePartita, PartitaFull } from 'src/app/models/partita-full.model';

@Component({
	selector: 'partita-azioni-timeline',
	templateUrl: './azioni-timeline.component.html',
	styleUrls: ['./azioni-timeline.component.css']
})
export class AzioniTimelineComponent implements OnChanges {

	@Input('partita') partita: PartitaFull = new PartitaFull();

	azioniA: any[] = [];
	azioniB: any[] = [];

	constructor() { }

	ngOnChanges() {
		let idSqA = this.partita.squadra1.id;

		this.azioniA = this.partita.azioni.filter((e) => (e['squadra'] == idSqA)).map((e) => new Elemento(e, 25));
		this.azioniB = this.partita.azioni.filter((e) => (e['squadra'] != idSqA)).map((e) => new Elemento(e, 25));
	}
}

class Elemento {
	padding: string = '';
	classe: string = '';
	testo: string = '';
	posizione: string = '';

	constructor(input: AzionePartita, minxtempo: number) {
		// visualizzazione e testo
		switch(input.tipo) {
			case 'gol': {
				this.padding = "tl-row2"
				this.classe = "fa fa-circle text-success";
				break;
			}
			case 'blu': {
				this.padding = "tl-row3"
				this.classe = "fa fa-square text-blue";
				break;
			}
			case 'rosso': {
				this.padding = "tl-row3"
				this.classe = "fa fa-square text-red";
				break;
			}
			case 'diretto': {
				this.padding = "tl-row4"
				this.classe = "badge bg-rig";
				this.testo = "D";
				break;
			}
			case 'rigore': {
				this.padding = "tl-row4"
				this.classe = "badge bg-rig";
				this.testo = "R";
				break;
			}
			case 'ammonizione': {
				this.padding = "tl-row3"
				this.classe = "fa fa-square text-amm";
				break;
			}
			case 'fds': {
				this.padding = "tl-row1"
				this.classe = "fa fa-circle text-warning";
				break;
			}
			case 'timeout': {
				this.padding = "tl-row5"
				this.classe = "badge bg-secondary";
				this.testo = "T";
				break;
			}
		}

		// posizione
		let time = input.minuto.split(':');
		let min = (input.tempo === 'P1' || input.tempo === 'P2') ? (minxtempo - parseInt(time[0]) - 1) + (input.tempo === 'P2' ? minxtempo : 0) : minxtempo * 2;
		let sec = (60 - parseInt(time[1]));
		let poss = ((min * 60 + sec) / (minxtempo * 2 * 60)) * 100;
		this.posizione = poss + "%";
	}
}
