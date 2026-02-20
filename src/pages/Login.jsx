import { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    localStorage.setItem("user", username);
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;