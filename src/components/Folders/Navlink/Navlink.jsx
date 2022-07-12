import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navlink.module.css';
import folder from '../../../images/folders/folder.png'

function Navlink({ path, name, logo=folder }) {
  return (
    <NavLink to={path} className={s.navlink}>
      <img className={s.logo} src={logo} alt={name} />
      <h2 className={s.title}>{name}</h2>
      <div className={s.buttons}></div>
    </NavLink>
  );
}

export default Navlink;
