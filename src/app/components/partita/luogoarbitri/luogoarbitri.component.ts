import { Component, Input } from '@angular/core';

@Component({
	selector: 'partita-luogoarbitri',
	templateUrl: './luogoarbitri.component.html',
	styleUrls: ['./luogoarbitri.component.css']
})
export class LuogoArbitriComponent {
	@Input('partita') partita: any = {};
}
