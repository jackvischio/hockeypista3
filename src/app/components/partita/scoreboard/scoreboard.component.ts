import { Component, Input } from '@angular/core';

@Component({
	selector: 'partita-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
	@Input('partita') partita: any = {};
}
