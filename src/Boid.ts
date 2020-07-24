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

class Boid {
    velocity: Vector;
    position: Vector;
    id: number

    constructor(id: number) {
        const theta = Math.PI * 2 * Math.random();
        this.velocity = new Vector(Math.cos(theta), Math.sin(theta));
        this.velocity.mul(velocitySize);
        this.position = new Vector(width * Math.random(), height * Math.random());
        this.id = id;
    }

    nextState(birds: Array<Boid>) {
        this.position.add(this.velocity);

        const velocity = new Vector(0, 0);
        const others = birds.filter((other) => other.position.distance(this.position) > 0)
        velocity.add(cohension(this, others));
        velocity.normalize();
    }
}
