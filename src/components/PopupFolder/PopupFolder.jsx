import React from 'react';
import s from './PopupFolder.module.css'

function PopupFolder({ title, textButton, isOpen, value, 
  setInput, handleSubmit, handleClickOverlay }) {

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  return (
    <div
      className={s.popup + " " + (isOpen ? s.popup_opened : "")}
      onClick={handleClickOverlay}
    >
      <form
        className={s.container + " " + (!setInput ? s.container_delete : "")}
        onSubmit={handleSubmit}
      >
        <h2 className={s.title}>{title}</h2>
        <input
          className={setInput ? s.input : s.input__hidden}
          type="text"
          placeholder="Введите название папки"
          value={value}
          onChange={handleChange}
        />
        <button
          className={s.button + " " + (setInput && !value ? s.button_disabled : "")}
          type="submit"
          disabled={setInput && !value ? s.button_disabled : null}
        >{textButton}</button>
      </form>
    </div>
  );
};

export default PopupFolder;
