import { writable } from 'svelte/store';
import { Minion } from './Minion.js';

export class MinionCollection {
    constructor(minionSource, minionSink) {
        this.minionSource = minionSource;
        this.minionSink = minionSink;

        this.minions = writable([]);
        this.path = null;
    }

    createMinion(minionType) {
        const path = this.path;

        this.minions.update(function (s) {
            // TODO: Create different types
            s.push(new Minion(path));

            return s;
        });
    }

    update() {
        this.minions.update(function (s) {
            s.forEach((minion) => {
                minion.update();
            });

            return s;
        });
    }
}
