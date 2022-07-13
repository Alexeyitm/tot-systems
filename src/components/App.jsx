import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import data from './../data/data'
import s from'./App.module.css';
import Header from './Header/Header'
import Folders from './Folders/Folders'
import Letter from './Letter/Letter'
import PopupFolder from './PopupFolder/PopupFolder';

function App() {

  /* Стейты попапов */
  const [isNewFolderPopupOpen, setIsNewFolderPopupOpen] = useState(false);
  const [isRenameFolderPopupOpen, setIsRenameFolderPopupOpen] = useState(false);

  /* Стейты инпутов */
  const [isNewFolderInput, setIsNewFolderInput] = useState('');
  const [isRenameFolderPopupInput, setRenameFolderPopupInput] = useState('');
  
  /* Закрытие попапов и очистка инпутов */
  const closeAllPopups = () => {
    setIsNewFolderPopupOpen(false);
    setIsRenameFolderPopupOpen(false);
    setTimeout(() => {
      setIsNewFolderInput('');
      setRenameFolderPopupInput('');
    }, 1000);
  }

  /* Закрытие попапов по клику на оверлей */
  const handleClickOverlay = (e) => {
    if(e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  /* Закрытие попапов при нажатии на Escape */
  const isOpen = isNewFolderPopupOpen || isRenameFolderPopupOpen
  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  /* Сабмит создания новой папки */
  const handleSubmitNewFolder = (e) => {
    e.preventDefault();
    data.folders.push({name: isNewFolderInput, custom: true});
    closeAllPopups();
  }

  return (
    <BrowserRouter>
      <div className={s.app}>
        <Header 
          user={data.user}
        />
        <Folders 
          folders={data.folders}
          openPopupNewFolder={setIsNewFolderPopupOpen}
          openPopupRenameFolder={setIsRenameFolderPopupOpen}
        />
        <Letter />
        <PopupFolder
          title="Добавить новую папку"
          textButton="Сохранить"
          isOpen={isNewFolderPopupOpen}
          value={isNewFolderInput}
          setInput={setIsNewFolderInput}
          handleSubmit={handleSubmitNewFolder}
          handleClickOverlay={handleClickOverlay}
        />
        <PopupFolder
          title="Переименовать папку"
          textButton="Сохранить"
          isOpen={isRenameFolderPopupOpen}
          value={isRenameFolderPopupInput}
          setInput={setRenameFolderPopupInput}
          handleClickOverlay={handleClickOverlay}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
