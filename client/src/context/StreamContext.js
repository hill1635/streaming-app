import React, { createContext, useEffect, useState } from 'react';

export const StreamContext = createContext();

export const StreamProvider = ({ children }) => {
  const [ sources, setSources ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  return (
    <StreamContext.Provider value={{ genres, sources }}>
      {children}
    </StreamContext.Provider>
  );
}