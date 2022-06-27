import {FormEventHandler, useState, ReactNode} from "react";

export const Skjema = () => {
    const [navn, setNavn] = useState("")

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        alert("Hei på deg " + navn);
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="navn-input">Navn</label>
        <input onChange={(e) => setNavn(e.target.value)} value={navn} id="navn-input"/>
        <button>Send inn</button>
    </form>;
};