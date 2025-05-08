
// src/pages/Signup.jsx
import React from "react";

export default function Signup() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" />
        <input type="email" placeholder="Email" className="w-full p-2 border" />
        <input type="password" placeholder="Password" className="w-full p-2 border" />
        <button className="bg-green-600 text-white px-4 py-2">Signup</button>
      </form>
    </div>
  );
}