import React, { createContext, useState, useEffect } from 'react';
import UserAPI from './utils/UserAPI';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
    services: [],
    genres: [],
  });
  
  useEffect(() => {
    UserAPI.get()
      .then((res) => {
        const userObject = {
          email: res.data?.email || "",
          displayName: res.data?.displayName || "",
          services: res.data?.services ? res.data.services.split(",") : [],
          genres: res.data?.genres ? res.data.genres.split(",") : [],
        };
        setUser(userObject);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};