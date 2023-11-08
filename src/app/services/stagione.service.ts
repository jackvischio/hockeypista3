import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StagioneService {
	private _stagione: number;
	private _stagBehSub: BehaviorSubject<number>;

	constructor() {
		this._stagione = 33;	// to be changed default to 35 or latest
		this._stagBehSub = new BehaviorSubject(this._stagione);
	}

	stagioneChanged(): Observable<number> {
		return this._stagBehSub.asObservable();
	}

	setStagione(newStag: number) {
		this._stagione = newStag;
		this._stagBehSub.next(newStag);
	}

	getStagione(): number { return this._stagione; }
}
