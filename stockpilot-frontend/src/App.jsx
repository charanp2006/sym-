// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewsFeed from "./pages/NewsFeed";
import StockDetails from "./pages/StockDetails";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatAssistant from "./pages/ChatAssistant";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
