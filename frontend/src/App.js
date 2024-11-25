import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Booking from "./components/Booking";
import Wallet from "./components/Wallet";
import ParkingSpace from "./components/ParkingSpace";
import Dashboard from "./components/Dashboard";
import Body from "./components/Body";
//import './styles/App.css';
 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/parkingspace" element={<ParkingSpace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
