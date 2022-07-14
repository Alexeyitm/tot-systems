import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import s from './Letter.module.css';
import Item from './Item/Item';

function Letter({ data }) {
  return (
    <div className={s.letter}>
      <Routes>
        {data.folders.map(folder =>
          <Route key={folder.id} path={folder.path} element={123}></Route>
        )}
        <Route
          path="*"
          element={<Navigate to="/inbox" replace />}
        />
      </Routes>
      <Item />
    </div>
  );
}

export default Letter;
