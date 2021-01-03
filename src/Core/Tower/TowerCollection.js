import { writable } from 'svelte/store';
import { Tower } from './Tower.js';
import { Vector } from '../Math/Vector.js';
import constants from '../constants.js';

export class TowerCollection {
    constructor() {
        this.towers = writable([]);
    }

    createTower(towerType, row, column) {
        let tower = new Tower(new Vector({
            'dx': (column + 0.5) * constants.NODE_WIDTH,
            'dy': (row + 0.5) * constants.NODE_HEIGHT,
        }));
        this.towers.update(function (s) {
            // TODO: Create different types
            s.push(tower);

            return s;
        });

        return tower;
    }

    update() {
        this.towers.update(function (s) {
            s.forEach((tower) => {
                // TODO: Update tower, i.e. shoot
                tower.update();
            });

            return s;
        });
    }
}
