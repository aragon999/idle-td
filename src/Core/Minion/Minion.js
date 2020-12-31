import { Vector } from '../Math/Vector.js';

export class Minion {
    constructor(path) {
        this.velocity = 1;
        this.waypointIdx = 0;
        this.shift = parseInt(Math.random() * 20, 10);

        this.path = [...path.map(waypoint => waypoint.clone().shift(this.shift) )];
        this.position = this.path[0].clone();
    }

    update() {
        // TODO: Currently this actually enables diagonal movement
        //       which is needed if the path cannot be found
        // TODO: Implement some rounding to enable non integer movement
        // TODO: Rework the waypoint logic with some pop algorithm, in order to remove
        //       the waypoint index stuff
        const waypoint = this.path[this.waypointIdx] || this.path[this.path.length - 1];

        const velocity = new Vector({'dx': 0, 'dy': 0});
        if (this.position['dx'] < waypoint['dx']) {
            velocity['dx'] = 1;
        } else if (this.position['dx'] < waypoint['dx']) {
            velocity['dx'] = -1;
        }

        if (this.position['dy'] < waypoint['dy']) {
            velocity['dy'] = 1;
        } else if (this.position['dy'] < waypoint['dy']) {
            velocity['dy'] = -1;
        }

        this.position.add(velocity);

        if ((velocity['dx'] > 0 && this.position['dx'] >= waypoint['dx'])
            || (velocity['dx'] < 0 && this.position['dx'] <= waypoint['dx'])
            || (velocity['dy'] > 0 && this.position['dy'] >= waypoint['dy'])
            || (velocity['dy'] < 0 && this.position['dy'] <= waypoint['dy']) || (velocity['dx'] == 0 && velocity['dy'] == 0)
        ) {
            this.waypointIdx += 1;
        }
    }

    getVelocity() {
        return 1;
    }
}
