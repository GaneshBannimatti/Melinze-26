import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="bg-neutral-900 p-8 rounded-xl">
        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="block mb-4 p-2 bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="block mb-4 p-2 bg-neutral-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-cyan-500 px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
