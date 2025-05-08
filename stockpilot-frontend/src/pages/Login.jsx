
// src/pages/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border" />
        <input type="password" placeholder="Password" className="w-full p-2 border" />
        <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}
