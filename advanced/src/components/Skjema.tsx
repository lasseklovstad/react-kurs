

/*
Oppgave 1: bruke useState til å toveis binde en variable til inputfeltet
 */

import {FormEventHandler} from "react";

export const Skjema = () => {

    const handleSubmit: FormEventHandler = (e)=>{
        e.preventDefault();
        alert("Hei på deg")
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="navn-input">Navn</label>
        <input id="navn-input" />
        <button>Send inn</button>
    </form>;
};