import React, { createContext, useEffect, useState } from 'react';
import StreamAPI from '../utils/StreamAPI';

export const StreamContext = createContext();

export const StreamProvider = ({ children }) => {
  const [ sources, setSources ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  const getNetworks = async () => {
    const networks = await StreamAPI.getNetworks().then((res) => {
      return res.data
    }).catch((err) => {
      console.error("Error fetching sources:", err);
    });
    return networks;
  };

  const getSources = async () => {
    const networks = await getNetworks();
    StreamAPI.getSources().then((res) => {
      const sources = res.data.map((source) => {
        const match = networks.find((network) => source.name.replace(" ", "") === network.name.replace(" ", ""));
        return {
          ...source,
          id: match?.id,
          sourceId: source.id
        };
      }).filter((source) => source.id);
      
      const uniqueSources = [];
      const ids = new Set();
      
      for (const source of sources) {
        if (!ids.has(source.id)) {
          ids.add(source.id);
          uniqueSources.push(source);
        }
      }
      setSources(uniqueSources);
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

  const getTitle = async (id) => {
    const title = await StreamAPI.getTitle(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error("Error fetching title:", err);
      });
    return title;
  };

  const getTitleDetails = async (id) => {
    const titleDetails = await StreamAPI.getTitleDetails(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error("Error fetching title details:", err);
      });
    return titleDetails;
  };

  useEffect(() => {
    getSources();
    getGenres();
  }, []);

  return (
    <StreamContext.Provider value={{ genres, sources, getTitles, getTitle, getTitleDetails }}>
      {children}
    </StreamContext.Provider>
  );
};