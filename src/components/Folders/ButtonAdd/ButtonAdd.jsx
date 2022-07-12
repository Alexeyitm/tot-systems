import React from 'react';
import s from './ButtonAdd.module.css';

function ButtonAdd({ openPopupNewFolder }) {

  const handleClickButtonAdd = () => {
    openPopupNewFolder(true);
  }

  return (
    <button className={s.button} onClick={handleClickButtonAdd}>Новая папка</button>
  );
}

export default ButtonAdd;
