import React from 'react';
import s from './Header.module.css';

function Header({ user }) {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <h1 className={s.name}>Пользователь: {user.name.split(' ')[0]}</h1>
    </header>
  );
}

export default Header;