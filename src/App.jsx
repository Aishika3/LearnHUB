// App.jsx
// App.jsx
// App.jsx
// App.jsx
// App.jsx
import React, { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import PdfPage from './components/PdfPage'; // Import the PdfPage component
import { arrayItems } from './AIOptions';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Todo from './components/Todo';

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const selectOption = (item) => {
    if (item.id === 'weather') {
      // Redirect to the weather website link
      window.location.href = 'https://example.com/weather';
    } else if (item.id === 'summary') {
      // Navigate to the PdfPage component
      setOption(item); // Set the selected option if needed
      window.location.href = '/pdf'; // Assuming /pdf is the route for PdfPage
    } else {
      // Continue with the normal option selection
      setOption(item);
    }
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
        <Routes>
          <Route
            path="/pdf"
            element={<PdfPage />}
          />
          <Route
            path="/"
            element={Object.values(option).length === 0 ? (
              <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
            ) : (
              <Translation item={option} doStuff={doStuff} setInput={setInput} result={result} />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;