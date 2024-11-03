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
      console.log("res:", res);
      const userObject = {
        id: res.data?._id || "",
        email: res.data?.email || "",
        displayName: res.data?.displayName || "",
        services: res.data?.services ? JSON.parse(res.data.services) : [],
        genres: res.data?.genres ? JSON.parse(res.data.genres) : [],
      };
      setUser({...userObject});
    })
    .catch((err) => {
      console.error("Error fetching user data:", err);
    });
  };

  const saveUser = (id, data) => {
    UserAPI.update(id, data)
    .catch((err) => {
      console.error("Error saving user data:", err);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log("user:", user);
    if (!init.current && user.email !== "") {
      userRef.current = user;
      init.current = true;
    }
    
    if (init.current && user !== userRef.current) {
      var data = {
        email: user.email,
        displayName: user.displayName,
        services: JSON.stringify(user.services),
        genres: JSON.stringify(user.genres),
      };
      saveUser(user.id, data);
      userRef.current = user;
      console.log("User saved.");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};