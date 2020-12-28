import { writable, get } from 'svelte/store';

export class FieldNode {
    constructor(row, column) {
        this.row = row;
        this.column = column;

        this._tower = writable();
    }

    setTower(tower) {
        this._tower.set(tower);
    }

    getTower() {
        return get(this._tower);
    }
}
