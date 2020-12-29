import { FieldNodeCollection } from './Field/FieldNodeCollection.js';

export class Game {
    constructor(rows, columns, minionSource, minionSink) {
        this.rows = rows;
        this.columns = columns;
        this.fieldNodeCollection = new FieldNodeCollection(this.rows, this.columns);

        this.minionSource = minionSource;
        this.minionSink = minionSink;

        this.occupiedNodes = Array(rows).fill(Array(rows).fill(false));

        this.computePath();
    }

    buildTower(row, column, towerType='test') {
        const fieldNode = this.fieldNodeCollection.getFieldNode(row, column);

        if (!fieldNode) {
            // TODO: Handle not existing field node, maybe just do nothing?
            return;
        }

        fieldNode.setTower(towerType);
        this.occupiedNodes[row][column] = true;
    }

    computePath() {
        const source = {...this.minionSource},
              sink = {...this.minionSink};

        let step = source;
        const path = [{...this.minionSource}];

        const xDir = (source['column'] > sink['column']) ? 1 : -1;
        const yDir = (source['row'] > sink['row']) ? 1 : -1;

        while (step['row'] !== sink['row'] && step['column'] !== sink['column']) {
            let distance1 = this.getDistance({'row': step['row'] + 1, 'column': step['column']}, sink);
            let distance2 = this.getDistance({'row': step['row'], 'column': step['column'] + 1}, sink);

            // TODO: Implement forward and backward possibility
            // TODO: Implement occupied nodes (i.e. towers, minions source/sink)
            if (distance1 < distance2) {
                step['row'] += 1; //step['row'] + xDir;  // TODO: This crashs the FPS, why? constants seem to work
            } else {
                step['column'] += 1; //step['column'] + yDir;
            }

            path.push({...step});
        }

        path.push({...this.minionSink});

        this.path = path;
    }

    getDistance(a, b) {
        return Math.sqrt(Math.abs(a['row'] - b['row'])**2 + Math.abs(a['column'] - b['column'])**2)
    }
}
