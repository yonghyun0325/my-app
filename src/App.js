import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './main/main';

function App() {
  return (
    <Router>
      <div className="app">
        <Main />
      </div>
    </Router>
  );
}

export default App;
