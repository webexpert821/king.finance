import React, { useEffect } from 'react'
import { useStore } from './context/StoreContext';
import logo from './logo.svg';
import './App.css';
import { localStorageGet } from './utils/localStorage';

function App() {
  const { session, setSession } = useStore()

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { localStorageGet("temp") } <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => setSession("Hello")}>Button</button>
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

export default App;
