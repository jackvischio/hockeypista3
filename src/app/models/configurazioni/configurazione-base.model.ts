export abstract class Configurazione {
    UUID: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.UUID = id;
        this.nome = nome;
    }
}