import { Injectable } from '@angular/core';
import { PartitaCalendario } from '../models/partita-calendario.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CalendarioService {

	constructor(private http: HttpClient) { }

	getCalendario(idCompetizione: string): Promise<PartitaCalendario[]> {
		return this.http.get(environment.backend + '/calendario/' + idCompetizione).toPromise().then((data: any) => {
			return data.map((elem: any) => new PartitaCalendario(elem));
		});
	}
}
