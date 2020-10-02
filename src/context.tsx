import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createStore, TStore } from './store';

export const storeContext = React.createContext<TStore | null>(null);

const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalObservable(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
