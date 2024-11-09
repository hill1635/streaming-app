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
    StreamAPI.getGenres().then((res) => {
      setGenres(res.data);
    }).catch((err) => {
      console.error("Error fetching genres:", err);
    });
  };

  const getTitles = async (params) => {
		const listTitles = await StreamAPI.getTitles(params)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				console.error("Error fetching titles:", err);
			});
		return listTitles;
	};

  useEffect(() => {
    getSources();
    getGenres();
  }, []);

  return (
    <StreamContext.Provider value={{ genres, sources, getTitles }}>
      {children}
    </StreamContext.Provider>
  );
};