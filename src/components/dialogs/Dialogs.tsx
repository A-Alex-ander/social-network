import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Alexandr"}/>
                <DialogItem id={2} name={"Vladislav"}/>
                <DialogItem id={3} name={"Nikita"}/>
                <DialogItem id={4} name={"Efim"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you ?"}/>
                <Message message={"Good"}/>
                <Message message={"Great"}/>
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

type MessageType = {
    message:string
}
const Message:React.FC<MessageType> = ({message}) => {
    return <div className={s.message}>{message}</div>
}

/*Тоже новая версия типизации */
// const Message = ({message}:MessageType):JSX.Element => {
//     return <div className={s.message}>{message}</div>
// }

export default Dialogs