import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
    </header>
  );
}

export default Header;
