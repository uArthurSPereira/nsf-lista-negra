import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Lista Negra</h1>

      <div className="app-link">
        <h2 className="h2-app-link"> <Link to="/cadastrar"> Cadastrar </Link> </h2>
      </div>

      <div className="app-link">
        <h2 className="h2-app-link"> <Link to="/consultar"> Consultar </Link> </h2>
      </div>

    </div>
  );
}

export default App;
