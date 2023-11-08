import { CategorieEnum } from "./categorie.enum";
import { Competizione } from "./competizione.model";

export class Categoria {
    categoria: string;
    competizioni: Competizione[];

    constructor();
    constructor(cat: string, comp: Competizione[]);
    constructor(cat?: string, comp?: Competizione[]) {
        this.categoria = cat || '';
        this.competizioni = comp || [];
    }
}