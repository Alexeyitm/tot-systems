import React, { useState } from 'react';
import s from './Item.module.css';
import Confirm from './Confirm/Confirm'

function Item({ item, data, setIsLetter }) {

  const[isMarker, setIsMarker] = useState(item.marker);
  const[isConfirmDelete, setIsConfirmDelete] = useState(false);

  const handleClickMarker = () => {
    item.marker = !item.marker;
    setIsMarker(item.marker);
  };

  const handleClickDelete = () => {
    setIsConfirmDelete(!isConfirmDelete);
  };

  return (
    <article className={s.item}>
      <Confirm
        item={item}
        data={data}
        setIsLetter={setIsLetter}
        isConfirmDelete={isConfirmDelete}
        setIsConfirmDelete={setIsConfirmDelete}
      />
      <div className={item.read ? "" : s.new}></div>
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
    </article>
  );
}

export default Item;
