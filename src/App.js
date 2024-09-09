import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Draft from "./Draftjs";
import Custom from "./Custom";

const Home = () => <h2>Home Page</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/draft">Draft</Link>
          </li>
          <li>
            <Link to="/custom">custom</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </Router>
  );
};

export default App;
