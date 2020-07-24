export default class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(other: Vector): Vector {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    sub(other: Vector): Vector {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    mul(scalar: number): Vector {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    div(scalar: number): Vector {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }

    size(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    clone(): Vector {
        return new Vector(this.x, this.y);
    }

    distance(other: Vector): number {
        const x = this.x - other.x;
        const y = this.y - other.y;
        return Math.sqrt(x * x + y * y);
    }

    normalize(): Vector {
        this.div(this.size());
        return this;
    }
}
