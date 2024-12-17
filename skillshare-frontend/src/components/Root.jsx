import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalContext = createContext();


// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('initial value');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook to use the global context
export const useGlobal = () => useContext(GlobalContext);
import React from 'react';
import { GlobalProvider } from './GlobalContext';
import App from './App';

const Root = () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
);

export default Root;