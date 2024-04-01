import React, {FC} from "react";
import s from './Dialogs.module.css'
import DialogItem, {DialogItemType} from "./dialogItem/DialogItem";
import {Message, MessageType} from "./message/Message";
import {DialogPageType} from "../redux/state";


type DialogsType = {
    state:DialogPageType
}
const Dialogs:FC<DialogsType> = ({state}) => {


    const dialogsElements = state.dialogs.map(el => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        )
    })
    const messagesElements = state.messages.map(el => {
        return (
            <Message id={el.id} message={el.message}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs