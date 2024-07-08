import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonQuery } from './pokemonApi';

const PokemonDetails = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPokemonQuery(name);

  if (!name) return <div>Select a Pokemon to see details</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ margin: '40px' }}>
      <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
      <img style={{ width: '120px' }} src={data.sprites.front_default} alt={data.name} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </div>
  );
};

export default PokemonDetails;
