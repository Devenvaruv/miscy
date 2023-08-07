import React, { useEffect, useState } from 'react';
import "./Login.css";



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("useEffect is called")
    }) 

    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "deven"){
            console.log("hello deven")
            setIsLoggedIn(true);
        }
      };
    


  return (
    isLoggedIn ? <h1>hello deven</h1> :

    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
