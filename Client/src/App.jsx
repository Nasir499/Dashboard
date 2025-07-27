import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Visualization Dashboard</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer className="App-footer">
        <p>Blackcoffer Assignment</p>
      </footer>
    </div>
  );
}

export default App;
