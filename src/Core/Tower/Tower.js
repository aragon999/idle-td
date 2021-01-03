import constants from '../constants.js';

export class Tower {
    constructor(position) {
        // Set the position to be the first step in the path
        this.position = position;
        this.level = 0;
    }

    update() {
        // TODO: let the tower shoot
    }

    get renderer() {
        const position = this.position;

        return ({ context }) => {
            context.strokeStyle = "#000";

            context.beginPath();
            context.arc(position['dx'], position['dy'], constants.NODE_WIDTH / 4, 0, 2 * Math.PI);
            context.stroke();
        }
    }

    get range() {
        return (this.level + 1) * this.baseRange * constants.NODE_WIDTH;
    }

    /**
     * The base unit of the base velocity is one tenth of a field node
     *
     * @return {Number}
     */
    get baseRange() {
        return 5;
    }
}
