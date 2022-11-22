import React from "react";
import "./App.css";
import "./styles/main.scss";
import HomePage from "./pages/HomePage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import StoreProvider from "./context/StoreContext";

function App() {
  return (
    <SmoothScroll>
      <StoreProvider>
        <div className="App">
          <HomePage />
        </div>
      </StoreProvider>
    </SmoothScroll>
  );
}

export default App;
