import React from 'react'
//import {stringify} from "querystring"
import s from './Message.module.css'

type propsType = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:propsType) {
    return (
        <div className={s.message}>
            <div className={s.message_ava}>
                <img src={props.avatar} alt={props.name} />
            </div>
            <div className={s.message_text}>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
                <span>{props.time}</span>
                <div className={s.arrow}>
                    <div className={s.arrowin}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
