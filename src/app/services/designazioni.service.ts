import { Injectable } from '@angular/core';
import { PartitaCalendario } from '../models/partita-calendario.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StatArbitri } from '../models/stat-arbitri.model';

@Injectable({
	providedIn: 'root'
})
export class DesignazioniService {

	constructor(private http: HttpClient) { }

	getListaArbitri(): Promise<string[]> {
		return this.http.get(environment.backend + '/arbitri/lista').toPromise().then((data: any) => { 
			return data.map((e: any) => String(e)); 
		});
	}

	getStatisticheArbitri(nome: string): Promise<StatArbitri[]> {
		return this.http.get(environment.backend + '/arbitri/' + nome).toPromise().then((data: any) => { 
			return data.map((s: any) => new StatArbitri(s)); 
		});
	}
}
