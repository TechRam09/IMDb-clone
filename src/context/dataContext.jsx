import React, { useState, createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  return (
    <DataContext.Provider
      value={{
        popular,
        setPopular,
        movieList,
        setMovieList,
        upcoming,
        setUpcoming,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
