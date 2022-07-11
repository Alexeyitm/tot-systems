import React from 'react';
import s from'./App.module.css';
import Header from './Header/Header'
import Folders from './Folders/Folders'
import Letter from './Letter/Letter'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Folders />
      <Letter />
    </div>
  );
}

export default App;
