import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import GameMenu from './GameMenu';
import CoupleTrivia from './CoupleTrivia';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <GameMenu /> : <Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/couple-trivia" element={<CoupleTrivia />} />
        {/* Add more routes for other games here */}
      </Routes>
    </div>
  );
}

export default App;
