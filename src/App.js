import React, { useEffect, useRef } from 'react'
import "./App.css"
import './styles/main.scss';
import HomePage from './pages/HomePage';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
    <div className="App">
        <HomePage />
    </div>
    </SmoothScroll>
  );
}

export default App;
