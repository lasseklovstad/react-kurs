type PokemonProps = {
  name: string;
};
export const Pokemon = ({ name }: PokemonProps) => {
  const pokemon = name;

  // Bruk UseEffect til å hente data med fetchPokemon

  if (!pokemon) {
    return null;
  }

  return <img src={pokemon} />;
};
