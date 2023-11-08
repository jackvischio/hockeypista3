import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classifica } from 'src/app/models/classifica.model';
import { Competizione } from 'src/app/models/competizione.model';
import { PartitaCalendario } from 'src/app/models/partita-calendario.model';
import { Squadra } from 'src/app/models/squadra.model';
import { CalendarioService } from 'src/app/services/calendario.service';
import { CampionatiService } from 'src/app/services/campionati.service';
import { ClassificaService } from 'src/app/services/classifica.service';
import { SquadraService } from 'src/app/services/squadra.service';

@Component({
	selector: 'app-competizione',
	templateUrl: './competizione.component.html',
	styleUrls: ['./competizione.component.css']
})
export class CompetizioneComponent implements OnInit {
	id: string;
	loading = true;

	competizione = new Competizione();
	squadre: Squadra[] = [];
	calendario: PartitaCalendario[] = [];
	classifica: Classifica[] = [];

	currentTab: number;

	constructor(
		private route: ActivatedRoute,
		private campionatiService: CampionatiService,
		private squadraService: SquadraService,
		private calendarioService: CalendarioService,
		private classificaService: ClassificaService
	) {
		this.id = this.route.snapshot.paramMap.get("id") || "";
		this.currentTab = 0;
	}

	async ngOnInit() {
		await Promise.all([
			this.campionatiService.getDettaglioCompetizione(this.id).then((comp) => {
				this.competizione = comp;
			}),
			this.squadraService.getSquadreCompetizione(this.id).then((sqs) => {
				this.squadre = sqs;
			}),
			this.calendarioService.getCalendario(this.id).then((cal) => {
				this.calendario = cal;
			}),
			this.classificaService.getClassificaCompetizione(this.id).then((cla) => {
				this.classifica = cla;
			})
		]);

		// assegno le squadre dove richiesto
		this.calendario.forEach((partita) => {
			partita.squadra1obj = this.squadre.find((sq) => sq.id == partita.squadra1) || new Squadra();
			partita.squadra2obj = this.squadre.find((sq) => sq.id == partita.squadra2) || new Squadra();
		});
		this.classifica.forEach((cl) => {
			cl.squadraObj = this.squadre.find((sq) => sq.id == cl.squadra) || new Squadra();
		});

		this.loading = false;
	}
}
