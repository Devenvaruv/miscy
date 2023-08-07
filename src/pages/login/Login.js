import React, { useEffect, useState } from 'react';
import "./Login.css";
import Dashboard from '../dashboard/Dashboard';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
        console.log("useEffect is called")
    }) 

    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "deven"){
            console.log("hello deven")
            setIsLoggedIn(true);
        }
        if (password === '25') {
            setIsLoggedIn(true);
            setLoginStatus('');
          } else {
            setLoginStatus('Invalid username or password. Please try again.'); // Set error message
          }
      };

    const handleLogout = () => {
        setIsLoggedIn(false);
      };

    if(isLoggedIn) {
        return <Dashboard username={username} handleLogout={handleLogout} />;
    }
    


  return (
    <div>
      <h2>Login Page</h2>
      {loginStatus && <p style={{ color: 'red' }}>{loginStatus}</p>}
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
