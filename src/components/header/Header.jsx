import React from 'react';
import './Header.scss';

export const Header = () => {
  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header>
      <div className="header-left">
        <h1>DB.</h1>
      </div>

      <nav className="header-right">
        {menuItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button>{menuItems[menuItems.length - 1]}</button>
      </nav>
    </header>
  );
};
