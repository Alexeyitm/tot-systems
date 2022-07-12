import React from 'react';
import { BrowserRouter } from "react-router-dom";
import s from'./App.module.css';
import Header from './Header/Header'
import Folders from './Folders/Folders'
import Letter from './Letter/Letter'
import data from './../data/data'

function App() {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <Header 
          user={data.user}
        />
        <Folders 
          folders={data.folders}
        />
        <Letter />
      </div>
    </BrowserRouter>
  );
}

export default App;
