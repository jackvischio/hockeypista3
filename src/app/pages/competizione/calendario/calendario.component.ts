import { Component, Input } from '@angular/core';
import { PartitaCalendario } from 'src/app/models/partita-calendario.model';

@Component({
	selector: 'app-calendario',
	templateUrl: './calendario.component.html',
	styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

	@Input() idComp: string = '';
	@Input() tipo: string = 'na';
	@Input() calendario: PartitaCalendario[] = [];

	constructor() { }
}
