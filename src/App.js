import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Wallet from './components/Wallet';
import ParkingSpace from './components/ParkingSpace';
import { Navigate } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                <Route path="/booking" element={<RequireAuth><Booking /></RequireAuth>} />
                <Route path="/wallet" element={<RequireAuth><Wallet /></RequireAuth>} />
                <Route path="/parking-space" element={<RequireAuth><ParkingSpace /></RequireAuth>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

function RequireAuth({ children }) {
    const user = localStorage.getItem('user');
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
}

export default App; 