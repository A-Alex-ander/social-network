import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type MessageType = {
    id: number
    message: string
}

const Message: React.FC<MessageType> = ({message, id}) => {
    return <div className={s.message}>{message}</div>
}
/*Тоже новая версия типизации */
// const Message = ({message}:MessageType):JSX.Element => {
//     return <div className={s.message}>{message}</div>
// }

export default Message