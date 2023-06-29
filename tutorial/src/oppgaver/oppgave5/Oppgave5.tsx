import { useState } from "react";
import { Pokemon } from "./Pokemon";
import { PokemonForm } from "./PokemonForm";

export const Oppgave5 = () => {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <Pokemon name={pokemonName} />
    </>
  );
};
