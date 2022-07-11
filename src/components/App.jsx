import React from 'react';
import s from'./App.module.css';
import Header from './Header/Header'
import Folders from './Folders/Folders'
import Letter from './Letter/Letter'
import data from './../data/data'

function App() {
  return (
    <div className={s.app}>
      <Header 
        user={data.user}
      />
      <Folders />
      <Letter />
    </div>
  );
}

export default App;
