import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Field from "./Components/Field";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/field" element={<Field />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
