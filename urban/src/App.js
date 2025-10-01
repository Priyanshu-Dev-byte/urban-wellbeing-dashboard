import React, { useState } from "react";
import "./App.css";
import AirPollution from "./components/AirPollution";
import HeatStress from "./components/HeatStress";
import GreenSpace from "./components/GreenSpace";

function App() {
  const [activeTab, setActiveTab] = useState("air");

  return (
    <div className="app">
      <header className="header">
        <h1>🌍 NASA Urban Health Dashboard</h1>
        <nav>
          <button 
            className={activeTab === "air" ? "active" : ""} 
            onClick={() => setActiveTab("air")}
          >
            Air Pollution
          </button>
          <button 
            className={activeTab === "heat" ? "active" : ""} 
            onClick={() => setActiveTab("heat")}
          >
            Heat Stress
          </button>
          <button 
            className={activeTab === "green" ? "active" : ""} 
            onClick={() => setActiveTab("green")}
          >
            Green Space
          </button>
        </nav>
      </header>

      <main>
        {activeTab === "air" && <AirPollution />}
        {activeTab === "heat" && <HeatStress />}
        {activeTab === "green" && <GreenSpace />}
      </main>
    </div>
  );
}

export default App;
