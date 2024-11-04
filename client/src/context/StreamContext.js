import React, { createContext, useEffect, useState } from 'react';

export const StreamContext = createContext();

export const StreamProvider = ({ children }) => {
  return (
    <StreamContext.Provider value={{}}>
      {children}
    </StreamContext.Provider>
  );
}