import React  from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Homepage/Homepage";
import NoPage from "./pages/ErrorPageNotFound/ErrorPageNotFound";
import Navbar from './components/Navbar/Navbar';
import ApartmentPage from './pages/ApartmentPage/ApartmentPage';
import Footer from './layout/Footer/Footer';


function App() {

  // path: "/flat",                     // Route pour la page d'appartement
  // element: <ApartmentPage />

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Link to="/">Home</Link> 
        <Link to="/about">About</Link> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/accueil" />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/flat" element={<ApartmentPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div> 
  );
};

export default App;