import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Room from "./pages/Room";

const App: React.FC = () => {
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
};

export default App;
