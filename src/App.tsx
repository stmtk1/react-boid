import React from 'react';
import logo from './logo.svg';
import './App.css';
import Triangle from './Triangle';
import Vector from './Vector';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

function Animal() {
    return (
        <Triangle position={new Vector(Math.random() * 600, Math.random() * 400)} velocity={new Vector(Math.random(), Math.random())} />
    )
}

function App() {
    return (
        <div>
            <svg width="600" height="400" viewBox="0 0 600 400">
                {new Array(100).fill(null).map((_, i) => (<Animal key={i} />))}
            </svg>
        </div>
    );
}

export default App;
