import React  from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './layout/Header/Header'
import About from "./pages/About/About";
import Home from "./pages/Homepage/Homepage";
import NoPage from "./pages/ErrorPageNotFound/ErrorPageNotFound";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
    </div> 
  );
};

export default App;