import React, { useState, useEffect } from 'react';
import Triangle from './Triangle';
import Vector from './Vector';
import Boid from './Boid';

const width = 600;
const height = 400;

const initBirds = new Array(1000).fill(null).map(() => {
    const position = new Vector(Math.random() * width, Math.random() * height);
    const velocity = new Vector(Math.random(), Math.random());
    return new Boid(position, velocity);
});

interface IAnimal {
    boid: Boid
}

function Animal(props: IAnimal) {
    const boid = props.boid;
    return (
        <Triangle
            position={boid.position!}
            velocity={boid.velocity!}
        />
    )
}

function App() {
    const [birds, setBirds] = useState(initBirds);
    const nextBirds = birds.map((bird) => bird.nextState(birds, width, height));
    useEffect(() => {setTimeout(() => setBirds(nextBirds), 50)});
    const viewBox = `0 0 ${width} ${height}`

    return (
        <div>
            <svg width={width} height={height} viewBox={viewBox}>
                {birds.map((bird, i) => (<Animal boid={bird} key={i} />))}
            </svg>
        </div>
    );
}

export default App;
