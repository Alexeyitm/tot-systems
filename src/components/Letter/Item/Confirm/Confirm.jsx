import React from 'react';
import s from './Confirm.module.css';

function Confirm({ item, data, setIsLetter, isConfirmDelete, setIsConfirmDelete }) {

  const handleClickConfirmYes = () => {
    data.letter = data.letter.filter(el => el.id !== item.id);
    setIsLetter(data.letter);
  };

  const handleClickConfirmNo = () => {
    setIsConfirmDelete(false);
  };

  return (
    <div className={s.confirm + " " + (isConfirmDelete ? s.confirm_open : "")}>
      <h2 className={s.select}>Удалить письмо?</h2>
      <button 
        className={`${s.button} ${s.yes}`}
        onClick={handleClickConfirmYes}
      ></button>
      <button 
        className={`${s.button} ${s.no}`}
        onClick={handleClickConfirmNo}
      ></button>
    </div>
  );
}

export default Confirm;
