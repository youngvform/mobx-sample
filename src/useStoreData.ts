import { useObserver } from 'mobx-react-lite';
import React from 'react';

export const useStoreData = <ContextData, Store, Selection>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = React.useContext(context);
  if (!value) throw new Error();
  const store = storeSelector(value);
  return useObserver(() => dataSelector(store));
};
