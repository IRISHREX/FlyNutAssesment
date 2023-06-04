import React, { createContext } from 'react';

// Create a new context object
const MyContext = createContext();

// Create a component that provides the value for MyContext
const MyContextProvider = ({ children }) => {
  const value = 'This is the context value';

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };
