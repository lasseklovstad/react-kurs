import {useState} from "react";

interface FavoriteAnimalProps {
};
export const FavoriteAnimal = (props: FavoriteAnimalProps) => {
    const [animal, setAnimal] = useState("");
    return <>
        <label htmlFor="animal-input">Favorittdyr</label>
        <input value={animal} onChange={(ev) => setAnimal(ev.target.value)} id="animal-input"/>
    </>;
};