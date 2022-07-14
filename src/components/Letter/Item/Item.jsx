import React, { useState } from 'react';
import s from './Item.module.css';

function Item({ item }) {

  const[isMarker, setIsMarker] = useState(item.marker)

  const handleClickMarker = () => {
    item.marker = !item.marker;
    setIsMarker(item.marker);
  }

  return (
    <div className={s.item}>
      <div className={s.buttons}>
        <button
          className={s.button + " " + (isMarker ? s.marker_active : s.marker)}
          onClick={handleClickMarker}
        ></button>
        <button className={`${s.button} ${s.delete}`}></button>
      </div>
      <h3 className={s.author}>
        {item.read === undefined ? "Кому: " + item.to : "От: " + item.from}
      </h3>
      <p className={s.title}>{item.title}</p>
      <span className={s.date}>{item.date}</span>
    </div>
  );
}

export default Item;
