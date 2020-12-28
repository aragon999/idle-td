import { FieldNode } from './FieldNode.js';

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
        const idx = this.getFieldNodeIndex(row, column);

        if (idx < 0 || idx >= this.columns * this.rows) {
            return null;
        }

        return this.getFieldNodeByIndex(idx);
    }

    getFieldNodeByIndex(idx) {
        return this.fieldNodes[idx];
    }

    getFieldNodeIndex(row, column) {
        return (row * this.columns) + column;
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
