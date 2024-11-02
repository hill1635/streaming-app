import React, { createContext, useState, useEffect } from 'react';
import UserAPI from './utils/UserAPI';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    UserAPI.get()
    .then((res) => {
      if (res.data !== undefined) {
        setUser(res.data);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};