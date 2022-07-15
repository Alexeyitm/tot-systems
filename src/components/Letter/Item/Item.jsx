import React, { useState } from 'react';
import s from './Item.module.css';

function Item({ item, isLetter, setIsLetter }) {

  const[isMarker, setIsMarker] = useState(item.marker);
  const[isConfirmDelete, setIsConfirmDelete] = useState(false);

  const handleClickMarker = () => {
    item.marker = !item.marker;
    setIsMarker(item.marker);
  }

  const handleClickDelete = () => {
    setIsConfirmDelete(!isConfirmDelete);
  }

  const handleClickYes = () => {
    setIsLetter(isLetter.filter(el => el.id !== item.id))
  }

  const handleClickNo = () => {
    setIsConfirmDelete(false);
  }

  return (
    <div className={s.item}>
      <div className={s.confirm + " " + (isConfirmDelete ? s.confirm_open : "")}>
        <h2 className={s.select}>Удалить письмо?</h2>
        <button 
          className={`${s.button} ${s.yes}`}
          onClick={handleClickYes}
        ></button>
        <button 
          className={`${s.button} ${s.no}`}
          onClick={handleClickNo}
        ></button>
      </div>
      <div className={!item.read ? s.new : ""}></div>
      <div className={s.buttons}>
        <button
          className={s.button + " " + (isMarker ? s.marker_active : s.marker)}
          onClick={handleClickMarker}
        ></button>
        <button
          className={`${s.button} ${s.delete}`}
          onClick={handleClickDelete}
        ></button>
      </div>
      <h2 className={s.author}>
        {item.read === undefined ? "Кому: " + item.to : "От: " + item.from}
      </h2>
      <p className={s.title}>
        <span className={s.theme}>Тема: </span>
      {item.title}</p>
      <span className={s.date}>{item.date}</span>
    </div>
  );
}

export default Item;