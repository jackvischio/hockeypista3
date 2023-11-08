import { Component, Input, OnChanges } from '@angular/core';
import { AzionePartita, PartitaFull } from 'src/app/models/partita-full.model';

@Component({
  selector: 'partita-azioni-full',
  templateUrl: './azioni.component.html',
  styleUrls: ['./azioni.component.css']
})
export class AzioniComponent implements OnChanges{
	@Input('partita') partita: PartitaFull = new PartitaFull();
	@Input('full') visualizzaTutti: boolean = true;

	azioni: any[] = [];

	constructor() { }

	ngOnChanges() {
		let idSqA = this.partita.squadra1.id;
		let logoSqA = this.partita.squadra1.logo;
		let logoSqB = this.partita.squadra2.logo;

		let act = (this.visualizzaTutti) ? this.partita.azioni : this.filtra(this.partita.azioni);

		this.azioni = act.map((e: AzionePartita) => {
			let res = this.mappingTitolo(e);
			let icon = this.mappingIcon(e);
			return {
				'tempo': e['minuto'], //e['tempo'] + " - " + e['minuto'],
				'logo': (e['squadra'] == idSqA ? logoSqA : logoSqB),
				'titolo': res[0],
				'badge': res[1],
				'giocatore': this.parseGiocatore(e['giocatore']),
				'lato': (e['squadra'] == idSqA ? 'flex-row' : 'flex-row-reverse'),
				'align': (e['squadra'] == idSqA ? 'text-start' : 'text-end'),
				'icona': icon
			};
		})
	}

	private filtra(azioni: AzionePartita[]) {
		return azioni.filter((elem) => {
			switch(elem.tipo) {
				case 'gol':
				case 'blu':
				case 'rosso':
				case 'diretto':
				case 'rigore':
					return true;
				case 'ammonizione':
				case 'fds':
				case 'timeout':
				default:
					return false;
			}
		})
	}

	private mappingTitolo(azione: AzionePartita) {
		switch(azione.tipo) {
			case 'fds': 		return [azione.info + "° fallo di squadra", undefined];
			case 'gol': 		return ["Gol", azione.info]
			case 'timeout': 	return ["Timeout", undefined]
			case 'blu': 		return ["Cartellino blu", undefined]
			case 'rosso': 		return ["Cartellino rosso", undefined]
			case 'ammonizione': return ["Ammonizione verbale", undefined]
			case 'diretto': 	return ["Tiro diretto", undefined]
			case 'rigore': 		return ["Tiro di rigore", undefined]
			default: 			return ["", undefined];
		}
	}

	private mappingIcon(azione: AzionePartita) {
		switch(azione.tipo) {
			case 'fds': 		return "assets/icon-fds.png"
			case 'gol': 		return "assets/icon-goal.png"
			case 'timeout': 	return "assets/timeout.png"
			case 'blu': 		return "assets/blue-card.png"
			case 'rosso': 		return "assets/red-card.png"
			//case 'ammonizione': return ["Ammonizione verbale", undefined]
			case 'diretto': 	return "assets/diretto.png"
			case 'rigore': 		return "assets/rigore.png"
			default: 			return "assets/whistle.png"
		}
	}

	private parseGiocatore(gioc: any) {
		if(gioc.nome)
			return gioc.nome + " " + gioc.cognome + " (" + gioc.numero + ")";
		return undefined;
	}
}
