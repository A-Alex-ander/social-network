import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type dialogsType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}


const Dialogs = () => {
    let dialogs: dialogsType[] = [
        {id: 1, name: 'Alexandr'},
        {id: 2, name: 'Vladislav'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Efim'},
        {id: 5, name: 'John'},
    ]

    let message: messageType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'Great'},
        {id: 5, message: 'Badly'},
    ]

    let dialogsElement = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)

    let messagesElement = message.map(el => <Message message={el.message} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

const DialogItem: React.FC<DialogItemType> = ({id, name}) => {
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
}
/* Другая версия типизации(новее)*/
// const DialogItem = ({ id, name }: DialogItemType): JSX.Element => {
//     return (
//         <div className={s.dialog + " " + s.active}>
//             <NavLink to={"/dialogs/" + id}>{name}</NavLink>
//         </div>
//     );
// };


const Message: React.FC<MessageType> = ({message, id}) => {
    return <div className={s.message}>{message}</div>
}
/*Тоже новая версия типизации */
// const Message = ({message}:MessageType):JSX.Element => {
//     return <div className={s.message}>{message}</div>
// }

export default Dialogs