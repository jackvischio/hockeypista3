import { Component, Input, OnChanges } from '@angular/core';
import { GiornataCalendario } from 'src/app/models/giornata-calendario.model';
import { PartitaCalendario } from 'src/app/models/partita-calendario.model';

@Component({
	selector: 'app-cal-girone-unico',
	templateUrl: './girone-unico.component.html',
	styleUrls: ['./girone-unico.component.css']
})
export class GironeUnicoComponent implements OnChanges {
	// con il girone unico non è necessario guardare le fasi, ma solamente le giornate

	@Input() calendario: PartitaCalendario[] = [];

	giornate: GiornataCalendario[] = [];

	constructor() {}

	ngOnChanges(): void {
		if(this.calendario.length > 0) {
			this.giornate = this.raggruppaGiornate(this.calendario)
		}
	}

	raggruppaGiornate(partite: PartitaCalendario[]) : GiornataCalendario[] {
		let mappa = new Map<number, GiornataCalendario>();
		partite.forEach((partita) => {
			let elem = mappa.get(partita.giornid);
			if(elem == undefined) {
				let gior = new GiornataCalendario(partita.giornid, partita.giornnome);
				gior.partite.push(partita);
				mappa.set(partita.giornid, gior)
			} else {
				elem.partite.push(partita)
			}
		});
		let lista = Array.from(mappa.values());

		// associo una data alla giornata => default: valore più comune
		lista.forEach((giorn) => {
			let lst = giorn.partite.map((p) => p.data);
			giorn.data = lst.sort((a,b) => lst.filter(v => v===a).length - lst.filter(v => v===b).length).pop() || '';
		});

		return lista;
	}
}
