// Navbar.jsx
// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar({ isDarkMode, onToggle }) {
  const openNewWebsite = () => {
    // Open the new website link in a new tab
    window.open('https://reminderlistof2do.netlify.app/', '_blank');
  };

  return (
    <div className="navbar-container">
      <h1 className="heading">EducateAI</h1>
      <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
          <span className="slider round"></span>
        </label>
        <span className="toggle-text">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
        
        {/* New button to open the new website */}
        <button className="custom-button" onClick={openNewWebsite}>
          Make a ToDo List
        </button>
      </div>
    </div>
  );
}

export default Navbar;
