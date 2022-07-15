import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import s from './Letter.module.css';
import Item from './Item/Item';

function Letter({ data, isLetter, setIsLetter }) {

  return (
    <div className={s.letter}>
      <Routes>
        {data.folders.map(folder =>
          <Route 
            key={folder.id}
            path={folder.path}
            element={isLetter.map(item => 
              folder.path === item.type 
                ? <Item
                    item={item}
                    data={data}
                    setIsLetter={setIsLetter}
                    key={item.id}
                  /> 
                : null
            )}
          />
        )}
        <Route
          path="*"
          element={<Navigate to="/inbox" replace />}
        />
      </Routes>
    </div>
  );
}

export default Letter;
