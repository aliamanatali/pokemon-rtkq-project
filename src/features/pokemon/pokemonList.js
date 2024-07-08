import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonQuery } from './pokemonApi';

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const { data, error, isLoading } = useGetAllPokemonQuery(offset);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function handlePokemonClick(name) {
    navigate(`/pokemon/${name}`);
  }

  return (
    <div style={{ margin: '40px' }}>
      <h1 style={{ margin: '40px', marginBottom: '10px' }}>Pokemon List</h1>
      <ul>
        {data.results.map((pokemon) => (
          <p
            style={{ width: '30%' }}
            key={pokemon.name}
            onClick={() => handlePokemonClick(pokemon.name)}
          >
            <hr></hr>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </p>
        ))}
      </ul>
      <button onClick={() => setOffset((prev) => Math.max(prev - 20, 0))}>Previous</button>
      <button onClick={() => setOffset((prev) => prev + 20)}>Next</button>
    </div>
  );
};

export default PokemonList;
