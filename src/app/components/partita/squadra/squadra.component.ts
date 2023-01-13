import { Component, Input } from '@angular/core';

@Component({
	selector: 'partita-squadra',
	templateUrl: './squadra.component.html',
	styleUrls: ['./squadra.component.css']
})
export class SquadraComponent {
	@Input('squadra') squadra: any = {};
}
