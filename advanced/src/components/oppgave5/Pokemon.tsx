import {useEffect, useState} from "react";
import {fetchPokemon} from "./pokemonApi";

interface PokemonProps {
    name: string
}
export const Pokemon = ({name}: PokemonProps) => {
    const pokemon = name

    // Bruk Useefect til å hente data med fetchPokemon


    if (!pokemon) {
        return null
    }

    return <img src={name}/>;
};