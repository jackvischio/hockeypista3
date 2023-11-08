import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategorieEnum } from 'src/app/models/categorie.enum';
import { Competizione } from 'src/app/models/competizione.model';
import { CampionatiService } from 'src/app/services/campionati.service';

@Component({
	selector: 'app-campionati',
	templateUrl: './campionati.component.html',
	styleUrls: ['./campionati.component.css']
})
export class CampionatiComponent implements OnInit {

	loading = true;

	constructor(
		private campionatiService: CampionatiService,
		private router: Router
	) { }

	categorie: Categoria[] = [];

	ngOnInit() {
		this.campionatiService.getAllCompetizioni().then((data) => {
			this.categorie = [];
			Object.values(CategorieEnum).forEach((categ) => {
				let list = data.filter((comp) => comp.categoria == categ);
				list.sort((a, b) => (a.ordine - b.ordine))
				if(list.length > 0)
					this.categorie.push(new Categoria(categ, list));
			});
			//this.competizioni = data;
			this.loading = false;
		})
	}

	apriComp(id: number) {
		this.router.navigate(['/competizione/' + id]);
	}
}
