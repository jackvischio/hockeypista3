import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cache } from './cache';
import { PartitaFull } from '../models/partita-full.model';

@Injectable({
	providedIn: 'root'
})
export class PartitaService {

	private cache: Cache;

	constructor(private http: HttpClient) {
		this.cache = new Cache(30);
	}

	caricaPartita(idp: number): Promise<PartitaFull> {
		let cached = this.cache.cerca(idp);
		if(cached !== undefined) {
			return new Promise((resolve, rej) => {
				resolve(cached!);
			});
		}

		return this.http.get(environment.backend + '/partita/' + idp).toPromise().then((data: any) => {
			let partita = data as PartitaFull;
			partita.tempo = "FINALE";
			partita.squadra1.abbr = data.sq1abb;
			partita.squadra2.abbr = data.sq2abb;
			return partita;
		});
	}

}