import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string //  fix
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void //  fix
    addUser: (e: MouseEvent<HTMLButtonElement>) => void // fix
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const disabled = !name
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <button onClick={addUser} disabled={disabled}>add</button>
            <span>{totalUsers}</span>
            <span className={s.someClass}>{error}</span>
        </div>
    )
}

export default Greeting
