import { Component, Input } from '@angular/core';
import { PartitaCalendario } from 'src/app/models/partita-calendario.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partita-calendario',
  templateUrl: './partita-calendario.component.html',
  styleUrls: ['./partita-calendario.component.css']
})
export class PartitaCalendarioComponent {
	_img = environment.img_url;
	
	@Input() partita: PartitaCalendario = new PartitaCalendario();

	get giocata() {
		return (this.partita.idp !== null);
	}

	constructor() {}
}
