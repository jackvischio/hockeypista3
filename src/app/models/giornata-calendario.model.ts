import { PartitaCalendario } from "./partita-calendario.model";

export class GiornataCalendario {
    id: number = 0;
    nome: string = '';
    data: string = '';
    partite: PartitaCalendario[] = [];

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
        this.partite = [];
    }
}