import React from 'react';
import CityList from './city';
import './App.css';
import StoreProvider from './context';
import Search from './search';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
