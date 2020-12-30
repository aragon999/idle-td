export class Minion {
    constructor(position) {
        this.position = position;
        this.velocity = 1;
        this.waypointIdx = 0;
    }

    update(waypoint) {
        // TODO: Currently this actually enables diagonal movement
        //       which is needed if the path cannot be found
        // TODO: Implement some rounding to enable non integer movement

        let velocityX = 0,
            velocityY = 0;
        if (this.position['dx'] < waypoint['dx']) {
            velocityX = 1;
        } else if (this.position['dx'] < waypoint['dx']) {
            velocityX = -1;
        }

        if (this.position['dy'] < waypoint['dy']) {
            velocityY = 1;
        } else if (this.position['dy'] < waypoint['dy']) {
            velocityY = -1;
        }

        this.position['dx'] += velocityX;
        this.position['dy'] += velocityY;

        if ((velocityX > 0 && this.position['dx'] >= waypoint['dx'])
            || (velocityX < 0 && this.position['dx'] <= waypoint['dx'])
            || (velocityY > 0 && this.position['dy'] >= waypoint['dy'])
            || (velocityY < 0 && this.position['dy'] <= waypoint['dy']) || (velocityX == 0 && velocityY == 0)
        ) {
            this.waypointIdx += 1;
        }
    }

    getVelocity() {
        return 1;
    }
}
