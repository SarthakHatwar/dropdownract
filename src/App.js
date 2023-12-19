import logo from './logo.svg';
import './App.css';

import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const items = ['Yes Sure', 'No Way', 'May be'];

  return (
    <div className="App">
      <h1>React Dropdown by Sarthak</h1>
      <div className="dropdown-container">
        <Dropdown items={items} />
      </div>
    </div>
  );
}

export default App;
