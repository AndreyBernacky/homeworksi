import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> //  fix
    addUserCallback: (v:string) => void // fix
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // fix any
    const [error, setError] = useState<string>('') //  fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.currentTarget.value) //  fix
    }

    const onKeyPressHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            addUser()
        }
    }

    const addUser = () => {
        if(name.trim() !== ''){
        addUserCallback(name)
        setName('')
        alert(name) // need to fix
        } else {
            setError('Input can not be epmty')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
