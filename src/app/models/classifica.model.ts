import { Squadra } from "./squadra.model";

export class Classifica {
    squadra: number = 0;
    squadraObj: Squadra = new Squadra();
    punti: number = 0;
    partite: number = 0;
    reti_segnate: number = 0;
    reti_subite: number = 0;
    vittorie: number = 0;
    pareggi: number = 0;
    sconfitte: number = 0;
    
    constructor();
    constructor(partial: Partial<Classifica>);
    constructor(partial?: Partial<Classifica>) {
        Object.assign(this, partial);
    }

    get reti_diff() {
        return this.reti_segnate - this.reti_subite;
    }
}