export class StatArbitri {
    nome: string = '';
    categoria: string = '';
    count: number = 0;

    constructor();
    constructor(partial: Partial<StatArbitri>);
    constructor(partial?: Partial<StatArbitri>) {
        Object.assign(this, partial);
    }
}