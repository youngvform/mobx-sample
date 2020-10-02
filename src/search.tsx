import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootData } from './hook';

const Search: React.FC = observer(() => {
  const { query, setQuery } = useRootData((store) => ({
    query: store.query.get(),
    setQuery: store.setQuery,
  }));
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
});

export default Search;
