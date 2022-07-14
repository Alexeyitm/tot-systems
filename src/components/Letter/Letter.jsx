import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import s from './Letter.module.css';
import Item from './Item/Item';

function Letter({ data }) {
  return (
    <div className={s.letter}>
      <Routes>
        {data.folders.map(folder =>
          <Route 
            key={folder.id}
            path={folder.path}
            element={data.letter.map(item => 
              folder.path === item.type 
                ? <Item 
                    key={item.id}
                    title={item.title}
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
