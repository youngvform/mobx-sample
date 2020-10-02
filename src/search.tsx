import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useRootData } from './hook';

const Search: React.FC = () => {
  const { query, setQuery } = useRootData((store) => ({
    query: store.query.get(),
    setQuery: store.setQuery,
  }));
  return useObserver(() => {
    return (
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  });
};

export default Search;
