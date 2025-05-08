

// src/pages/StockDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const mockHistory = [
  { date: "Mon", price: 190 },
  { date: "Tue", price: 192 },
  { date: "Wed", price: 194 },
  { date: "Thu", price: 193 },
  { date: "Fri", price: 195 }
];

export default function StockDetails() {
  const { symbol } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{symbol} Stock Details</h1>
      <div className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Price History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">AI Analysis:</h3>
          <p className="text-gray-700 mt-2">The recent trend indicates a stable upward momentum. Consider buying if support holds near $193.</p>
        </div>
      </div>
    </div>
  );
}
// This page displays detailed information about a specific stock, including its price history and AI analysis.
// The `mockHistory` array simulates historical price data. In a real application, this data would be fetched from an API.