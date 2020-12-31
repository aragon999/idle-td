export class Vector {
    constructor(coordinates) {
        this.dx = coordinates['dx'];
        this.dy = coordinates['dy'];
    }

    rescale(factor) {
        this.dx *= factor;
        this.dy *= factor;

        return this;
    }

    add(otherVector) {
        this.dx += otherVector['dx'];
        this.dy += otherVector['dy'];

        return this;
    }

    shift(offset) {
        this.dx += offset;
        this.dy += offset;

        return this;
    }

    clone() {
        return new Vector(this);
    }
}
