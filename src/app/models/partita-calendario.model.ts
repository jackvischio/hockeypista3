import { Squadra } from "./squadra.model";

export class PartitaCalendario {
    compid: number = 0;
    faseid: number = 0;
    faseruolo: string = '';
    fasenome: string = '';
    giornid: number = 0;
    giornruolo: string = '';
    giornnome: string = '';
    idp: number = 0;
    data: string = '';
    ora: string = '';
    squadra1: number = 0;
    squadra1obj: Squadra = new Squadra();
    squadra2: number = 0;
    squadra2obj: Squadra = new Squadra();
    risultato: string = '';

    constructor();
    constructor(partial: Partial<PartitaCalendario>)
    constructor(partial?: Partial<PartitaCalendario>) {
        Object.assign(this, partial);
    }
}