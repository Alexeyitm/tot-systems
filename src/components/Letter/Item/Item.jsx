import React from 'react';
import s from './Item.module.css';

function Item({ title }) {
  return (
    <div className={s.item}>
      {title}
    </div>
  );
}

export default Item;
