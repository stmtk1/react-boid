import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Triangle from './Triangle';
import Vector from './Vector';
import Boid from './Boid';

const width = 600;
const height = 400;

const initBirds = new Array(10).fill(null).map(() => {
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
    const nextBirds = birds.map((bird) => bird.nextState(birds));
    setTimeout(() => setBirds(nextBirds), 100);

    return (
        <div>
            <svg width="600" height="400" viewBox="0 0 600 400">
                {birds.map((bird, i) => (<Animal boid={bird} key={i} />))}
            </svg>
        </div>
    );
}

export default App;
