import { Component, Input, OnChanges } from '@angular/core';
import { Classifica } from 'src/app/models/classifica.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-classifica',
	templateUrl: './classifica.component.html',
	styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnChanges {
	_img = environment.img_url;

	@Input() classifica: Classifica[] = [];

	legenda = false;

	constructor() {}

	ngOnChanges(): void {
		this.classifica.sort((a, b) => {
			if(a.punti == b.punti)
				return (b.reti_diff - a.reti_diff)
			return (b.punti - a.punti)
		})
	}

	getStato(i: number) {
		// TODO in base alla configurazione, restituisce un colore
		if(i<6)
			return 'bg-success';
		if(i<10)
			return 'bg-info';
		return 'bg-danger';
	}

	showLegenda(value: boolean) {
		this.legenda = value;
	}
}
