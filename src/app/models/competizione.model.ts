export class Competizione {
    id: number = -1;
    stagione: number = 0;
    categoria: string = '';
    nome: string = '';
    tipo: string = '';
    ordine: number = 0;

    constructor();
    constructor(partial: Partial<Competizione>);
    constructor(partial?: Partial<Competizione>) {
        Object.assign(this, partial);
    }
}
    