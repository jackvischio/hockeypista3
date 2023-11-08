import { Configurazione } from "./configurazione-base.model";
import { GironeUnico } from "./girone-unico.model";

export class Configurazioni {
    static byID(id: number, obj: any): Configurazione | null {
        switch(id) {
            case 1: return new GironeUnico(obj)

            default: return null;
        }
    }
}