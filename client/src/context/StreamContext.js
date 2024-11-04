import React, { createContext, useEffect, useState } from 'react';
import StreamAPI from '../utils/StreamAPI';

export const StreamContext = createContext();

export const StreamProvider = ({ children }) => {
  const [ sources, setSources ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  const getSources = () => {
    StreamAPI.getSources().then((res) => {
      setSources(res.data);
    }).catch((err) => {
      console.error("Error fetching sources:", err);
    });
  };

  const getGenres = () => {
    StreamAPI.getSources().then((res) => {
      setGenres(res.data);
    }).catch((err) => {
      console.error("Error fetching genres:", err);
    });
  };

  useEffect(() => {
    getSources();
    getGenres();
  }, []);

  return (
    <StreamContext.Provider value={{ genres, sources }}>
      {children}
    </StreamContext.Provider>
  );
};