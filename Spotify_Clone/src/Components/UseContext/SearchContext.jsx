import React, { createContext, useState } from 'react';

// Create the context
export const SearchContext = createContext();

// Create the provider component
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
   const [currentTrack, setCurrentTrack] = useState(null);


  return (
    <SearchContext.Provider value={{ search, setSearch, currentTrack, setCurrentTrack }}>
      {children}
    </SearchContext.Provider>
  );
};