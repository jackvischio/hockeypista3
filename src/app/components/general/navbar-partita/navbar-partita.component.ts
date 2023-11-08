import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-navbar-partita',
	templateUrl: './navbar-partita.component.html',
	styleUrls: ['./navbar-partita.component.css']
})
export class NavbarPartitaComponent {
	@Input() nome: string = '';
	@Input() currentTab: number = 0;
	
	@Output() currentTabChange = new EventEmitter<number>();

	constructor() {}

	changeTab(tab: number) {
		if(this.currentTab != tab) {
			this.currentTab = tab;
			this.currentTabChange.emit(tab);
		}
	}
}
