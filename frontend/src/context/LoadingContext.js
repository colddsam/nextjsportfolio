import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  return (
    <LoadingContext.Provider value={{ loadingProgress, setLoadingProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
