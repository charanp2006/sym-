
// src/pages/NewsFeed.jsx
import React from "react";

const mockNews = [
  {
    title: "Apple's Q1 Earnings Exceed Expectations",
    summary: "Apple posted better-than-expected earnings in Q1, driven by strong iPhone sales. Analysts expect a bullish outlook for the next quarter."
  },
  {
    title: "Tesla Plans Major Expansion in Europe",
    summary: "Tesla announces its plan to build a new Gigafactory in Spain, signaling growth in the EV market. Experts see this as a major competitive move."
  },
  {
    title: "Fed Signals Potential Rate Cut in Late 2025",
    summary: "The Federal Reserve hinted at a possible interest rate cut, influencing market sentiment and sparking investor optimism in tech stocks."
  }
];

export default function NewsFeed() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Financial News (AI Summarized)</h1>
      <div className="space-y-6">
        {mockNews.map((news, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2 shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{news.title}</h2>
            <p className="text-gray-700 mt-1">{news.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

