import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StagioneService } from './stagione.service';
import { CategorieEnum } from '../models/categorie.enum';
import { Competizione } from '../models/competizione.model';

@Injectable({
	providedIn: 'root'
})
export class CampionatiService {

	constructor(
		private http: HttpClient,
		private stagioneService: StagioneService
	) {	}

	get stagione() {
		return this.stagioneService.getStagione();
	}

	getAllCompetizioni(): Promise<Competizione[]> {
		return this.http.get(environment.backend + '/competizioni/' + this.stagione).toPromise().then((data: any) => {
			return data.map((elem: any) => new Competizione(elem));
		});
	}

	getCompetizioniCategoria(categ: CategorieEnum): Promise<Competizione[]> {
		return this.http.get(environment.backend + '/competizioni/' + this.stagione + '/' + categ).toPromise().then((data: any) => {
			return data.map((elem: any) => new Competizione(elem));
		});
	}

	getDettaglioCompetizione(id: string): Promise<Competizione> {
		return this.http.get(environment.backend + '/competizione/' + id).toPromise().then((data: any) => {
			return new Competizione(data);
		});
	}
}
