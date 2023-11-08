import { PartitaFull } from "../models/partita-full.model";

export class Cache {
    private capacity: number;
    private queue: Map<number, PartitaFull>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.queue = new Map();
    }
    
    aggiungi(key: number, value: PartitaFull) {
        if (this.queue.size === this.capacity) {
            this.queue.delete(this.queue.keys().next().value);
        }
    
        this.queue.set(key, value);
    }
    
    cerca(key: number): PartitaFull | undefined {
        if (this.queue.size === 0) {
            return undefined;
        }
    
        let value = this.queue.get(key);
        if(value == undefined) {
            return undefined;
        }

        this.queue.delete(key);
        this.queue.set(key, value);
        return value;
    }
}