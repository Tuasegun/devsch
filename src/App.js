import Events from "./pages/Events";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div
    className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     </Router>
      <Events/>
    </div>
  );
}

export default App;
