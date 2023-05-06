import "./styles.css";
import ToDo from "./components/ToDo";
import React from 'react';

function App() {
  return (
    <div className="container">
      <React.StrictMode>
      <ToDo />
      </React.StrictMode>
    </div>
  );
}

export default App;
