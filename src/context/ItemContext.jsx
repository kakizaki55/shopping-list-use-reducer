import React from 'react';
import { useContext, createContext } from 'react';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const test = ' you got it!';
  return <ItemsContext.Provider value={test}>{children}</ItemsContext.Provider>;
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  console.log(context);
  if (context === 'undefined') {
    throw new Error('useEntries must be warped in a EntriesProvider component');
  }

  return context;
};
