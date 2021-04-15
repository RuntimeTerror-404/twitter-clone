import "./App.css";
import Sidebar from "./Sidebar";
import React from "react";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
