import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'partita-azioni',
  templateUrl: './azioni.component.html',
  styleUrls: ['./azioni.component.css']
})
export class AzioniComponent implements OnChanges{
	@Input('partita') partita: any = {};
	azioni = [];

	ngOnChanges() {
		let idSqA = this.partita.squadra1.id;
		let logoSqA = this.partita.squadra1.logo;
		let logoSqB = this.partita.squadra2.logo;

		let mappingFun = (azione: any) => {
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

		let parseGiocatore = (gioc: any) => {
			if(gioc.nome)
				return gioc.nome + " " + gioc.cognome + " (" + gioc.numero + ")";
			return undefined;
		}

		this.azioni = this.partita.azioni.map((e:any) => {
			let res = mappingFun(e);
			return {
				'tempo': e['tempo'] + " - " + e['minuto'],
				'logo': (e['squadra'] == idSqA ? logoSqA : logoSqB),
				'titolo': res[0],
				'badge': res[1],
				'giocatore': parseGiocatore(e['giocatore'])
			};
		})
	}
}
