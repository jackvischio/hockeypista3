import { Component, Input } from '@angular/core';
import { Squadra } from 'src/app/models/squadra.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-squadre-competizione',
  templateUrl: './squadre-competizione.component.html',
  styleUrls: ['./squadre-competizione.component.css']
})
export class SquadreCompetizioneComponent {
	_img = environment.img_url;

	@Input() squadre: Squadra[] = [];

	constructor() {}
}
