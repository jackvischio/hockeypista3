import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Classifica } from '../models/classifica.model';

@Injectable({
	providedIn: 'root'
})
export class ClassificaService {

	constructor(private http: HttpClient) { }

	getPosizioneClassificaSquadra(idSquadra: number, idCampionato: number) {
		return this.http.get('url');
	}

	getClassificaCompetizione(compID: string) {
		return this.http.get(environment.backend + '/classifica/competizione/' + compID).toPromise().then((data: any) => {
			return data.map((elem: any) => new Classifica(elem));
		});
	}
}
