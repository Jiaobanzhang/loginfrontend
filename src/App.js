import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", null, {
        params: { username, password }, withCredentials: true,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Error: Unable to connect to server");
    }
  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Login Page</h1>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
      </div>
  );
}

export default App;
