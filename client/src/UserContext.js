import React, { createContext, useState, useEffect, useRef } from 'react';
import UserAPI from './utils/UserAPI';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const init = useRef(false);
  const userRef = useRef({});
  const [user, setUser] = useState({
    email: "",
    displayName: "",
    services: [],
    genres: [],
  });

  const getUser = () => {
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
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!init.current && user.email !== "") {
      userRef.current = user;
      init.current = true;
    }
    
    if (init.current && user !== userRef.current) {
      console.log("newUser:", user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};