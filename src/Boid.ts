import Vector from './Vector'

const velocitySize = 10;
const width: number = 640;
const height: number = 480;
const cohensionRadious: number = 50;
const separationRadious: number = 20;
const alignmentRadious: number = 30;
const cohensionWeight: number = 2;
const separationWeight: number = 3;
const alignmentWeight: number = 1;

function cohension(self: Boid, others: Array<Boid>): Vector {
    return [new Vector(0, 0), ...others.filter((other) => other.position.distance(self.position) < cohensionRadious).map((other) => other.position)]
        .reduce((a, b) => { a.add(b); return a; }).normalize().mul(cohensionWeight);
}

function separation(self: Boid, others: Array<Boid>): Vector {
    return [new Vector(0, 0), ...others.filter((other) => other.position.distance(self.position) < separationRadious).map((other) => other.position)]
        .reduce((a, b) => { const size = b.size(); const c = b.clone(); c.div(size * size); a.sub(c); return a; }).normalize().mul(separationWeight);
}

function alignment(self: Boid, others: Array<Boid>): Vector {
    return [new Vector(0, 0), ...others.filter((other) => other.position.distance(self.position) < alignmentRadious).map((other) => other.velocity)]
        .reduce((a, b) => { a.add(b); return a; }).normalize().mul(alignmentWeight);
}

export default class Boid {
    velocity: Vector;
    position: Vector;

    constructor(position: Vector, velocity: Vector) {
        this.velocity = velocity;
        this.position = position;
        this.velocity.normalize();
        this.velocity.mul(velocitySize);
    }

    nextState(birds: Array<Boid>): Boid {
        const velocity = new Vector(0, 0);
        const others = birds.filter((other) => other.position.distance(this.position) > 0)
        velocity.add(cohension(this, others));
        velocity.add(separation(this, others));
        velocity.add(alignment(this, others));
        const position = this.position.clone();
        position.add(this.velocity);
        return new Boid(position, velocity);
    }
}
