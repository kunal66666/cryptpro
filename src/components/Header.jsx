import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ back }) => {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
          
          <path  fill="currentColor" d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
          </Link>
        )}
        <h1>
          <Link to="/">Coiner!</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
