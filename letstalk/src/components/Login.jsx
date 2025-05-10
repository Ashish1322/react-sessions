import React, { useState } from "react";
import useChat from "../context/hooks/useChat";

export default function Login() {
  const { login } = useChat();

  const [email, setEmail] = useState("");
  const [pass, setaPass] = useState("");

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center">Login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, pass);
            setEmail("");
            setaPass("");
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setaPass(e.currentTarget.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
              value={pass}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
