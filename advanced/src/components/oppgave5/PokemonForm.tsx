import {FormEventHandler, useState} from "react";

interface PokemonFormProps{
    onSubmit: (name: string) => void
};
export const PokemonForm = ({onSubmit}: PokemonFormProps) => {
    const [name, setName] = useState("")

    const handleSubmit: FormEventHandler = (e)=>{
        e.preventDefault();
        onSubmit(name.trim().toLowerCase())
    }

    return <form onSubmit={handleSubmit} className="flex-container">
        <label htmlFor="name-input">Navn</label>
        <input value={name} onChange={(ev) => setName(ev.target.value)} id="name-input"/>
    </form>;
};