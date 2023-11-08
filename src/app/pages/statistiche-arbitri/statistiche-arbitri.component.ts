import { Component, OnInit } from '@angular/core';
import { CategorieEnum } from 'src/app/models/categorie.enum';
import { GraficoModel } from 'src/app/models/grafico.model';
import { StatArbitri } from 'src/app/models/stat-arbitri.model';
import { DesignazioniService } from 'src/app/services/designazioni.service';

@Component({
	selector: 'app-statistiche-arbitri',
	templateUrl: './statistiche-arbitri.component.html',
	styleUrls: ['./statistiche-arbitri.component.css']
})
export class StatisticheArbitriComponent implements OnInit {

	loading = true;
	private colors = ['#498B94', '#F8C622', '#747474', '#EC972D'];

	nomi: string[] = [];
	stats: StatArbitri[] = [];
	grafico: GraficoModel[] = [];

	constructor(private designazioniService: DesignazioniService) {}

	ngOnInit(): void {
		this.designazioniService.getListaArbitri().then((nomi) => {
			this.nomi = nomi;
			this.loading = false;
		});
		this.stats = Object.values(CategorieEnum).map((cat) => new StatArbitri({ categoria: cat }));
		this.stats.push(new StatArbitri({ 'categoria': 'AUS' }))
	}

	stat(nome: string) {
		this.loading = true;
		this.designazioniService.getStatisticheArbitri(nome).then((stt) => {
			//this.stats = stats;
			this.stats.forEach((s) => s.count = 0);
			stt.forEach((s) => {
				this.stats[this.stats.findIndex((e) => e.categoria == s.categoria)].count = s.count;
			})
			this.creaGrafico();
			this.loading = false;
		});
	}

	creaGrafico() {
		let total = 0;
		this.stats.forEach(element => { total += element.count; });
		this.grafico = this.stats.map((e, i) => new GraficoModel(e.count, '#F8C622', ''+(e.count*160/total)+'%', e.categoria));
	}
}
