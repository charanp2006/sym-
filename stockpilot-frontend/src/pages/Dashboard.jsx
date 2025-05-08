
// src/pages/Dashboard.jsx
import React from "react";

const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 192.32, change: "+1.12%", prediction: "↑ Likely Uptrend" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2734.87, change: "-0.56%", prediction: "↓ Minor Downtrend" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 725.10, change: "+0.89%", prediction: "↑ Momentum Building" }
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStocks.map(stock => (
          <div key={stock.symbol} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{stock.name} ({stock.symbol})</h2>
            <p className="text-gray-700">Price: ${stock.price}</p>
            <p className={stock.change.startsWith('+') ? "text-green-600" : "text-red-600"}>Change: {stock.change}</p>
            <p className="mt-2 font-medium">AI Prediction: <span className="italic">{stock.prediction}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
// This is a simple dashboard page that displays stock information and AI predictions.
// The `mockStocks` array simulates stock data. In a real application, this data would be fetched from an API.