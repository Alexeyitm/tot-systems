import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Folder.module.css';
import image from '../../../images/folders/folder.png'

function Folder({ folder, openPopupRenameFolder, openPopupDeleteFolder, 
  setIsCurrentFolderRename, setIsCurrentFolderDelete }) {

  const handleClickRenameFolder = () => {
    openPopupRenameFolder(true);
    setIsCurrentFolderRename({name: folder.name, id: folder.id});
  };

  const handleClickDeleteFolder = () => {
    openPopupDeleteFolder(true);
    setIsCurrentFolderDelete({id: folder.id});
  };

  return (
    <NavLink 
      to={folder.path}
      className={s.folder}
    >
      <img
        className={s.logo}
        src={folder.logo ? folder.logo : image}
        alt={folder.name}
      />
      <h2 className={s.title}>{folder.name}</h2>
      <div className={(folder.custom ? s.buttons : s.buttons_disabled)}>
        <button 
          className={`${s.button} ${s.rename}`}
          onClick={handleClickRenameFolder}
        ></button>
        <button
          className={`${s.button} ${s.delete}`}
          onClick={handleClickDeleteFolder}
        ></button>
      </div>
    </NavLink>
  );
};

export default Folder;
