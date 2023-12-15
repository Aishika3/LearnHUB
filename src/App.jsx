import React, { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import PdfPage from './components/PdfPage';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { arrayItems } from './AIOptions';

// Login Page Component
const LoginPage = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic (you can replace this with your actual login logic)
    // For simplicity, let's just set isLoggedIn to true for this example.
    setIsLoggedIn(true);
    onLogin();
  };

  if (isLoggedIn) {
    return <Navigate to="/options" />;
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <label>UserName-</label>
      <input type="text"></input>
      <br />
      <label>Password</label>
      <input type="password"></input>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Main App Component
// ... (imports and components remain the same)

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const selectOption = (item) => {
    if (item.id === 'weather') {
      window.location.href = 'https://example.com/weather';
    } else if (item.id === 'summary') {
      setOption(item);
      window.location.href = '/pdf';
    } else {
      setOption(item);
    }
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/options"
            element={
              isLoggedIn ? (
                Object.values(option).length === 0 ? (
                  <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
                ) : (
                  <Translation item={option} doStuff={doStuff} setInput={setInput} result={result} />
                )
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/pdf" element={<PdfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;