import { writable, get } from 'svelte/store';
import { FieldNodeCollection } from './Field/FieldNodeCollection.js';
import { TowerCollection } from './Tower/TowerCollection.js';
import { MinionCollection } from './Minion/MinionCollection.js';
import { Vector } from './Math/Vector.js';
import constants from './constants.js';

export class Game {
    constructor(rows, columns, minionSource, minionSink) {
        this.nodeWidth = constants.NODE_WIDTH;
        this.nodeHeight = constants.NODE_HEIGHT;

        this.rows = rows;
        this.columns = columns;
        this.fieldNodeCollection = new FieldNodeCollection(this.rows, this.columns);
        this.towerCollection = new TowerCollection(this.rows, this.columns);

        this.minionSource = minionSource;
        this.minionSink = minionSink;
        this.minionCollection = new MinionCollection(this.minionSource, this.minionSink);

        this.occupiedNodes = Array(rows);
        for (let i = 0; i < rows; i++) {
            this.occupiedNodes[i] = Array(columns).fill(false);
        }

        this.currentGold = writable(constants.START_GOLD);

        this.computePath();
    }

    buildTower(row, column, towerType='test') {
        if ((row < 0 || row >= this.rows) || column < 0 || column >= this.columns) {
            throw `row = ${row} and column = ${column} cannot be found`;
        }

        // TODO: Handle already built tower, menu should actually not be visible
        if (this.occupiedNodes[row][column]) {
            return;
        }

        const towerCost = 2;
        if (get(this.currentGold) - towerCost < 0) {
            return;
        }

        this.currentGold.update((currentGold) => currentGold -= towerCost);
        const tower = this.towerCollection.createTower(towerType, row, column);
        this.occupiedNodes[row][column] = tower;
        this.computePath();
    }

    computePath() {
        const source = {...this.minionSource},
            sink = {...this.minionSink};

        let step = source;
        const path = [{...this.minionSource}];

        // TODO: There are still several cases where no path can be found, this is currently not covered,
        //       some kind of backward walking of the current path and removing elements
        let stepCounter = 0;
        while (step['row'] !== sink['row'] && step['column'] !== sink['column'] && stepCounter < 1000) {
            let smallestDistance = null,
                smallestStep = null,
                currentDistance = null;

            // Iterate over all 4 possible directions and find the smallest distance
            for (let i = 0; i < 4; i++) {
                const currentStep = this.getStep(step, i);
                currentDistance = this.getDistance(currentStep, sink);

                if (!this.occupiedNodes[currentStep['row']][currentStep['column']] && (!smallestDistance || currentDistance < smallestDistance)) {
                    smallestStep = {...currentStep};
                    smallestDistance = currentDistance;
                }
            }

            if (!smallestStep) {
                throw `Cannot find path at step {row = ${step['row']}, column = ${step['column']}}`;
            }

            path.push({...smallestStep});
            step = smallestStep;

            stepCounter += 1;
        }

        path.push({...this.minionSink});

        this.path = path;
        this.minionCollection.path = path.map(step =>
            (new Vector({'dx': step['column'] * this.nodeWidth, 'dy': step['row'] * this.nodeHeight}))
        );
    }

    getDistance(a, b) {
        return Math.sqrt(Math.abs(a['row'] - b['row'])**2 + Math.abs(a['column'] - b['column'])**2)
    }

    getStep(currentPosition, direction) {
        if (direction === 0) {  // right
            return {'row': currentPosition['row'] + 1, 'column': currentPosition['column']};
        } else if (direction === 1) {  // bottom
            return {'row': currentPosition['row'], 'column': currentPosition['column'] + 1};
        } else if (direction === 2) {  // left
            return {'row': currentPosition['row'] - 1, 'column': currentPosition['column']};
        } else if (direction === 3) { // top
            return {'row': currentPosition['row'], 'column': currentPosition['column'] - 1};
        }

        throw `Cannot find step for direction ${direction}`;
    }
}
