import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Folder.module.css';
import folder from '../../../images/folders/folder.png'

function Folder({ path, logo=folder, name, id, custom, openPopupRenameFolder, 
  openPopupDeleteFolder, setIsCurrentFolderRename, setIsCurrentFolderDelete }) {

  const handleClickRenameFolder = () => {
    openPopupRenameFolder(true);
    setIsCurrentFolderRename({name: name, id: id});
  }

  const handleClickDeleteFolder = () => {
    openPopupDeleteFolder(true);
    setIsCurrentFolderDelete({id: id});
  }

  return (
    <NavLink 
      to={path}
      className={s.folder}
    >
      <img
        className={s.logo}
        src={logo}
        alt={name}
      />
      <h2 className={s.title}>{name}</h2>
      <div className={(custom ? s.buttons : s.buttons_disabled)}>
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
}

export default Folder;
