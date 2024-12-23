import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './main/Main';
import Login from './login/Login';
import Join from './join/Join'; 

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Join />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
