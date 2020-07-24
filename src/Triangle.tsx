import React from 'react';
import Vector from './Vector';

interface IProps {
    position: Vector
    velocity: Vector
}

const radious = 10;
function Triangle(props: IProps) {
    const position = props.position;
    const velocity = props.velocity;
    const points = new Array(3)
        .fill(null)
        .map((_, i) => {
            const theta = Math.PI * i * 2 / 3 + Math.atan2(velocity.x, velocity.y);
            const x = Math.floor(position.x + Math.cos(theta) * radious);
            const y = Math.floor(position.y + Math.sin(theta) * radious);
            return `${x},${y}`
        })
        .join(" ")
    return (
        <polygon points={points} fill="black" />
    );
}

export default Triangle;
