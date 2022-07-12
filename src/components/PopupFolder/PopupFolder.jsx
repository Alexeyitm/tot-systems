import React from 'react';
import s from './PopupFolder.module.css'

function PopupFolder({ title, textButton, isOpen, value, setInput, handleSubmit, handleClickOverlay }) {

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div
      className={s.popup + " " + (isOpen ? s.popup_opened : "")}
      onClick={handleClickOverlay}
    >
      <form
        className={s.container}
        onSubmit={handleSubmit}
      >
        <h2 className={s.title}>{title}</h2>
        <input 
          className={s.input}
          type="text"
          placeholder="Введите название папки"
          value={value}
          onChange={handleChange}
        />
        <button
          className={s.button + " " + (!value ? s.button_disabled : "")}
          type="submit"
          disabled={!value ? s.button_disabled : null}
        >{textButton}</button>
      </form>
    </div>
  );
}

export default PopupFolder;
