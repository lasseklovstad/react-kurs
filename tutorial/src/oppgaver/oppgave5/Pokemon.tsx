import { useEffect, useState } from "react";
import { fetchPokemon } from "./pokemonApi";

type PokemonProps = {
  name: string;
};
export const Pokemon = ({ name }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<string | null>(null);
  useEffect(() => {
    fetchPokemon(name).then((data) => {
      setPokemon(data);
    });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return <img src={pokemon} />;
};
