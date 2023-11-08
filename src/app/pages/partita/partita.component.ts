import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartitaFull } from 'src/app/models/partita-full.model';
import { PartitaService } from 'src/app/services/partita.service';

@Component({
  selector: 'app-partita',
  templateUrl: './partita.component.html',
  styleUrls: ['./partita.component.css']
})
export class PartitaComponent implements OnInit {

	loading = true;

	currentTab: number;

	public id = -1;
	public partita: PartitaFull = new PartitaFull();

	constructor(private partitaService: PartitaService, private route: ActivatedRoute) {
		this.id = parseInt(this.route.snapshot.paramMap.get('id') || "-1");
		this.currentTab = 1;
	}

	ngOnInit(): void {
		this.partitaService.caricaPartita(this.id).then((partita: PartitaFull) => {
			this.partita = partita;
			this.loading = false;
		});
	}
}
