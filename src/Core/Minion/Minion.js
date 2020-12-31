import { Vector } from '../Math/Vector.js';
import constants from '../constants.js';

export class Minion {
    constructor(path) {
        const randomInt = (mult) => parseInt(Math.random() * mult, 10);

        this.waypointIdx = 0;
        this.shift = new Vector({'dx': randomInt(constants.NODE_WIDTH), 'dy': randomInt(constants.NODE_HEIGHT)});
        this.path = [...path.map(waypoint => waypoint.clone().shift(this.shift) )];

        // Set the position to be the first step in the path
        this.position = this.path.shift();
        // The next waypoint is next in the path
        this.waypoint = this.path.shift();
    }

    update() {
        // TODO: Currently this actually enables diagonal movement
        //       which is needed if the path cannot be found
        // TODO: Implement some rounding to enable non integer movement
        const velocity = this.velocity;

        if (this.path.length > 0
            && ((velocity['dx'] > 0 && this.position['dx'] >= this.waypoint['dx'])
                || (velocity['dx'] < 0 && this.position['dx'] <= this.waypoint['dx'])
                || (velocity['dy'] > 0 && this.position['dy'] >= this.waypoint['dy'])
                || (velocity['dy'] < 0 && this.position['dy'] <= this.waypoint['dy'])
                || (velocity['dx'] == 0 && velocity['dy'] == 0)
            )
        ) {
            this.waypoint = this.path.shift();
        }

        this.position.add(velocity);
    }

    get velocity() {
        const velocity = new Vector({'dx': 0, 'dy': 0});

        if (this.position['dx'] < this.waypoint['dx']) {
            velocity['dx'] = this.baseVelocity;
        } else if (this.position['dx'] < this.waypoint['dx']) {
            velocity['dx'] = -this.baseVelocity;
        }


        if (this.position['dy'] < this.waypoint['dy']) {
            velocity['dy'] = this.baseVelocity;
        } else if (this.position['dy'] < this.waypoint['dy']) {
            velocity['dy'] = -this.baseVelocity;
        }

        velocity['dx'] *= constants.NODE_WIDTH / 10;
        velocity['dy'] *= constants.NODE_WIDTH / 10;

        return velocity;
    }

    /**
     * The base unit of the base velocity is one tenth of a field node
     *
     * @return {Number}
     */
    get baseVelocity() {
        return 1;
    }
}
