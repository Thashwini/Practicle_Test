import React, { useState } from 'react';
import Login from './Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDo from './ToDo';

function App() {
  const [user, setUser] = useState({ username: '', password: '' });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Login />} />
          <Route exact path={'/todo'} element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
