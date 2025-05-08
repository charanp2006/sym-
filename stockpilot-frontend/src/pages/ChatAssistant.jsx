
// src/pages/ChatAssistant.jsx
import React, { useState } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      const aiResponse = { role: "assistant", text: `Here's my insight on '${input}'... (AI reply here)` };
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  // 3. Connect React Frontend to Backend (src/pages/ChatAssistant.jsx)
// Replace simulated AI reply with real API call
// In ChatAssistant.jsx inside sendMessage function:

/*
const res = await fetch("http://localhost:5000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input })
});
const data = await res.json();
const aiResponse = { role: "assistant", text: data.reply };
setMessages(prev => [...prev, aiResponse]);
*/

// 4. Optional: Python AI API (app.py)
/*
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data['message']
    reply = f"Python AI says: Here's an insight on '{user_input}'"
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(port=5001)
*/
    // Uncomment the above code and run the Python server on port 5001 if you want to use a Python backend.

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Assistant Chat</h1>
      <div className="border rounded-xl p-4 h-96 overflow-y-scroll bg-gray-50 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "user" ? "text-right" : "text-left"}>
            <p className={msg.role === "user" ? "text-blue-600" : "text-green-700"}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-2 border rounded"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
