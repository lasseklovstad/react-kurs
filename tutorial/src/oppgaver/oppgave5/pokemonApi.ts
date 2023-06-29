type PokemonApiResponse = {
  sprites: {
    front_default: string;
  };
};

export const fetchPokemon = (name: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data: PokemonApiResponse) => data.sprites["front_default"]);
};
