import { useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import data from './../data/data'
import s from'./App.module.css';
import Header from './Header/Header'
import Folders from './Folders/Folders'
import Letter from './Letter/Letter'
import PopupFolder from './PopupFolder/PopupFolder';

function App() {

  /* Стейты попапов */
  const [isOpenNewFolderPopup, setIsOpenNewFolderPopup] = useState(false);
  const [isOpenRenameFolderPopup, setIsOpenRenameFolderPopup] = useState(false);

  /* Стейты инпутов */
  const [isNewFolderInput, setIsNewFolderInput] = useState('');
  
  /* Закрытие попапов и очистка инпутов */
  const closeAllPopups = () => {
    setIsOpenNewFolderPopup(false);
    setTimeout(() => setIsNewFolderInput(''), 1000);
  }

  /* Закрытие попапов по клику на оверлей */
  const handleClickOverlay = (e) => {
    if(e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  /* Сабмит создания новой папки */
  const handleSubmitNewFolder = (e) => {
    e.preventDefault();
    data.folders.push({name: isNewFolderInput, custon: true});
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
          openPopupNewFolder={setIsOpenNewFolderPopup}
          openPopupRenameFolder={setIsOpenRenameFolderPopup}
        />
        <Letter />
        <PopupFolder
          title="Добавить новую папку"
          textButton="Сохранить"
          isOpen={isOpenNewFolderPopup}
          value={isNewFolderInput}
          setInput={setIsNewFolderInput}
          handleSubmit={handleSubmitNewFolder}
          handleClickOverlay={handleClickOverlay}
        />
        <PopupFolder
          title="Переименовать папку"
          textButton="Сохранить"
          isOpen={isOpenRenameFolderPopup}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
