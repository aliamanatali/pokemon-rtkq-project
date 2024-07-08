import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import PokemonList from './features/pokemon/pokemonList'
import PokemonDetails from './features/pokemon/pokemonDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
