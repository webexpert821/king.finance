import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreProvider from './context/StoreContext';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
