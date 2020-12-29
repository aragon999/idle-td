import { FieldNodeCollection } from './Field/FieldNodeCollection.js';

export class Game {
    constructor(rows, columns, minionSource, minionSink) {
        this.rows = rows;
        this.columns = columns;
        this.fieldNodeCollection = new FieldNodeCollection(this.rows, this.columns);

        this.minionSource = minionSource;
        this.minionSink = minionSink;
    }

    buildTower(row, column, towerType='test') {
        const fieldNode = this.fieldNodeCollection.getFieldNode(row, column);

        if (!fieldNode) {
            // TODO: Handle not existing field node, maybe just do nothing?
            return;
        }

        fieldNode.setTower(towerType);
    }
}
