interface NameProps {
    name: string
    onNameChange: (name: string) => void
}
export const Name = ({name, onNameChange}: NameProps) => {
    return <>
        <label htmlFor="name-input">Navn</label>
        <input value={name} onChange={(ev) => onNameChange(ev.target.value)} id="name-input"/>
    </>;
};