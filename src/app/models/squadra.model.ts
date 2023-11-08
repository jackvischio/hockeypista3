export class Squadra {
    id: number = 0;
    nome: string = '';
    abbr: string = '';
    logo: string = '';

    constructor();
    constructor(partial: Partial<Squadra>);
    constructor(partial?: Partial<Squadra>) {
        Object.assign(this, partial);
    }
}