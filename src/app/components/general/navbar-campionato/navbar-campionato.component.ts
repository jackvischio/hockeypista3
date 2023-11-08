import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-navbar-campionato',
	templateUrl: './navbar-campionato.component.html',
	styleUrls: ['./navbar-campionato.component.css']
})
export class NavbarCampionatoComponent {
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
