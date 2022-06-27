import {PokemonForm} from "./PokemonForm";
import {useState} from "react";
import {Pokemon} from "./Pokemon";

export const Oppgave5 = () => {
    const [pokemonName, setPokemonName] = useState("")
    return <>
        <PokemonForm onSubmit={setPokemonName}/>
        <Pokemon name={pokemonName} />
    </>;
};