import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import data from './../data/data';
import s from'./App.module.css';
import Header from './Header/Header';
import Folders from './Folders/Folders';
import Letter from './Letter/Letter';
import PopupFolder from './PopupFolder/PopupFolder';
import { api } from '../utils/api';

function App() {

  /* Стейты попапов */
  const [isNewFolderPopupOpen, setIsNewFolderPopupOpen] = useState(false);
  const [isRenameFolderPopupOpen, setIsRenameFolderPopupOpen] = useState(false);
  const [isDeleteFolderPopupOpen, setIsDeleteFolderPopupOpen] = useState(false);

  /* Стейты инпутов */
  const [isNewFolderInput, setIsNewFolderInput] = useState('');
  const [isRenameFolderPopupInput, setRenameFolderPopupInput] = useState('');

  /* Cтейт редактирования и удаления попапов */
  const [isCurrentFolderRename, setIsCurrentFolderRename] = useState({name: '', id: ''});
  const [isCurrentFolderDelete, setIsCurrentFolderDelete] = useState({id: ''});
  
  /* Закрытие попапов и очистка инпутов */
  const closeAllPopups = () => {
    setIsNewFolderPopupOpen(false);
    setIsRenameFolderPopupOpen(false);
    setIsDeleteFolderPopupOpen(false);
    setTimeout(() => {
      setIsNewFolderInput('');
      setRenameFolderPopupInput('');
    }, 500);
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

  /* Установка текущего значения редактируемого инпута */
  useEffect(() => {
    setRenameFolderPopupInput(isCurrentFolderRename.name);
  }, [isCurrentFolderRename])

  /* Сабмит создания новой папки */
  const handleSubmitNewFolder = (e) => {
    e.preventDefault();

      console.log(api.translateText(isNewFolderInput))

    data.folders.push({
      name: isNewFolderInput,
      path: "" + (data.folders[data.folders.length - 1].id + 1), 
      id: data.folders[data.folders.length - 1].id + 1, 
      custom: true});
    closeAllPopups();
  }

  /* Сабмит редактирования папки */
  const handleSubmitRenameFolder = (e) => {
    e.preventDefault();
    data.folders.forEach(folder => {
      if (folder.id === isCurrentFolderRename.id) {
        folder.name = isRenameFolderPopupInput;
      }
    })
    closeAllPopups();
  }

  /* Сабмит удаления папки */
  const handleSubmitDeleteFolder = (e) => {
    e.preventDefault();
    data.folders.forEach((folder, i) => {
      if (folder.id === isCurrentFolderDelete.id) {
        data.folders.splice(i, 1)
      }
      else i++;
    })
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
          openPopupDeleteFolder={setIsDeleteFolderPopupOpen}
          setIsCurrentFolderRename={setIsCurrentFolderRename}
          setIsCurrentFolderDelete={setIsCurrentFolderDelete}
        />
        <Letter 
          data={data}
        />
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
          handleSubmit={handleSubmitRenameFolder}
          handleClickOverlay={handleClickOverlay}
        />
        <PopupFolder
          title="Удалить папку?"
          textButton="Да"
          isOpen={isDeleteFolderPopupOpen}
          handleSubmit={handleSubmitDeleteFolder}
          handleClickOverlay={handleClickOverlay}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
