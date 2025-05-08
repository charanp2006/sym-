
// src/components/Navbar.jsx
import React from "react";
// import { Link } from "react-router-dom/dist/index.d.mts";
import { BrowserRouter, Route, Link, } from 'react-router-dom'; // ✅ correct
// import { Routes } from 'react-router-dom'; // ✅ correct      
// import { Route } from 'react-router-dom'; // ✅ correct

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <span className="font-bold text-xl">StockPilot</span>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/news">News</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/chat">AI Assistant</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}