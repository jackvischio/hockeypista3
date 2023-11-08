import { Component } from '@angular/core';

@Component({
	selector: 'app-menu-page',
	templateUrl: './menu-page.component.html',
	styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {

	options = [
		{
			text: "Partite in corso",
			icon: "fa-solid fa-person-running",
			color: "danger"
		}
	]
}
