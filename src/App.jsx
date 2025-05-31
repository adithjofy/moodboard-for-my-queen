import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import EmojiPage from './pages/EmojiPage.jsx';
import Final from './pages/Final.jsx';
import { Navigate } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emojis" element={<EmojiPage />} />
        <Route path="/final" element={<Final />} />
	<Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;