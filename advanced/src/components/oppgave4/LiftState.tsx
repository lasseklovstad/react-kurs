import {FavoriteAnimal} from "./FavoriteAnimal";
import {Name} from "./Name";
import {useState} from "react";
import {Display} from "./Display";
import "../../App.css"

/*
Oppgave 4: Endre Display komponenten slik at den sier hvilket dyr som er personens favortitt.
 */

export const LiftState = () => {
    const [name, setName] = useState("")
    return <div className="flex-container" style={{width: "200px"}}>
        <Name name={name} onNameChange={setName}/>
        <FavoriteAnimal/>
        <Display name={name}/>
    </div>;
};