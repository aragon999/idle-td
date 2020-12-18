import { writable, get } from 'svelte/store';

export class FieldNodeCollection {
    /**
     * @param {int} rows - Total rows of the current collection
     * @param {int} columns - Total columns of the current collection
     */
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.fieldNodes = [];

        this._createFieldNodes();
    }

    /**
     * Get the field node at specific row and column
     *
     * @param {int} row
     * @param {int} column
     *
     * @return {(FieldNode|null)}
     */
    getFieldNode(row, column) {
        const idx = (row * this.columns) + column;

        if (idx < 0 || idx >= this.columns * this.rows) {
            return null;
        }

        return this.fieldNodes[idx];
    }

    /**
     * Get all field nodes as plain array
     *
     * @return {FieldNode[]}
     */
    getFieldNodes() {
        return this.fieldNodes;
    }

    _createFieldNodes() {
        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.fieldNodes.push(new FieldNode(i, j));
            }
        }
    }
}

class FieldNode {
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
