import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state/state";



type DialogsType = {
    dialogs:DialogType[]
    message: MessageType[]
}
const Dialogs:React.FC<DialogsType> = ({dialogs,message}) => {


    let dialogsElement = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)

    let messagesElement = message.map(el => <Message  id={el.id} message={el.message}/>)

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

export default Dialogs