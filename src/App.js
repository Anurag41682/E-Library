import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Navbar></Navbar>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;
