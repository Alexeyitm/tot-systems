import React from 'react';
import s from './Item.module.css';

function Item({ item }) {
  return (
    <div className={s.item}>
      <div className={s.buttons}></div>
      <h3 className={s.author}>
        {item.read === undefined ? "Кому: " + item.to : "От: " + item.from}
      </h3>
      <p className={s.title}>{item.title}</p>
      <span className={s.date}>{item.date}</span>
    </div>
  );
}

export default Item;
