import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Squadra } from '../models/squadra.model';

@Injectable({
	providedIn: 'root'
})
export class SquadraService {

	constructor(private http: HttpClient) { }

	getSquadra(idSquadra: number) {
		
	}

	getSquadreCompetizione(idComp: string) {
		return this.http.get(environment.backend + '/squadre/competizione/' + idComp).toPromise().then((data: any) => {
			return data.map((elem: any) => new Squadra(elem));
		});
	}
}
