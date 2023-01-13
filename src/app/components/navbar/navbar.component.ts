import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	loggedIn = true

	login() {
		this.loggedIn = true;
	}

	logout() {
		this.loggedIn = false;
	}
}