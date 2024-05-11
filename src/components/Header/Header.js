import React from 'react';
import UserMenu from '../UserMenu/UserMenu.js';

const Header = () => {
  return (
    <header className="header">
      <h1>Awesome Kanban Board</h1>
      <UserMenu />
    </header>
  );
}

export default Header;