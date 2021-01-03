import { writable, get } from 'svelte/store';

export class FieldNode {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}
