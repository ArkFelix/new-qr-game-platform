// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import GameMenu from './GameMenu'; // Make sure this import is correct

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? 
        <GameMenu /> : 
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      }
    </div>
  );
}

export default App;
