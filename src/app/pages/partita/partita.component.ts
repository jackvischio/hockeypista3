import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartitaService } from 'src/app/services/partita.service';

@Component({
  selector: 'app-partita',
  templateUrl: './partita.component.html',
  styleUrls: ['./partita.component.css']
})
export class PartitaComponent implements OnInit {

	public id = -1;
	public partita: any = { };

	constructor(private partitaService: PartitaService, private route: ActivatedRoute) {
		this.id = parseInt(this.route.snapshot.paramMap.get('id') || "-1");
	}

	ngOnInit(): void {
		this.partitaService.caricaPartita(this.id).subscribe((data: any) => {
			this.partita = data;
			this.partita.tempo = "FINALE";
		}, (err: any) => {
			console.log(err);
		});
	}
}
