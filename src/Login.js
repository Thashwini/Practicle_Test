import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const adminCredentials = {
    username: 'admin',
    password: 'admin.',
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);

    if (username === '' && password === '') {
      setError('Enter Username and Password');
      console.log('ttw');
    } else if (username === '') {
      setError('Enter Username');
      console.log('ttw');
    } else if (username !== 'admin' && password === 'admin.') {
      setError('Invalid Username');
      console.log('ttw');
    } else if (password === '') {
      setError('Enter Password');
      console.log('ttw');
    } else if (password != 'admin.' && username === 'admin') {
      setError('Invalid Password');
      console.log('tt');
    } else if (password != 'admin.' && username != 'admin') {
      setError('Both Invalid Password');
      console.log('btt');
    }
    console.log(error);

    if (password === 'admin.' && username === 'admin') {
      //   history.push('./ToDo');
      navigate('./ToDo');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
      <div className="Login">
        <label>Username </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="Login">
        <label>Password </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <label>{error}</label>
      <div className="Login">
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default Login;
