import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PartitaService {

	constructor(private httpClient: HttpClient) { }

	caricaPartita(id: number) {
		return this.httpClient.get(environment.backend + '/partita/' + id);
	}
}