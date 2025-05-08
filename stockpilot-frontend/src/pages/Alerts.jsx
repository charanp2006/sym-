
// src/pages/Alerts.jsx
import React from "react";

const mockAlerts = [
  {
    time: "09:30 AM",
    message: "AAPL crossed resistance level at $190. Trend likely to continue."
  },
  {
    time: "11:00 AM",
    message: "TSLA shows unusual volume spike. Watch for reversal."
  },
  {
    time: "01:45 PM",
    message: "GOOGL formed bullish engulfing pattern. Possible breakout."
  }
];

export default function Alerts() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Real-Time Alerts (AI Powered)</h1>
      <div className="space-y-4">
        {mockAlerts.map((alert, idx) => (
          <div key={idx} className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
            <p className="font-medium">{alert.time} - {alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
