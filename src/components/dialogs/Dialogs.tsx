import React, {ChangeEvent, FC} from "react";
import s from './Dialogs.module.css'
import DialogItem, {DialogItemType} from "./dialogItem/DialogItem";
import {Message, MessageType} from "./message/Message";
import {DialogPageType, sendMessageAC, StoreType, updateNewMessageAC} from "../redux/state";


type DialogsType = {

    store:StoreType
}
const Dialogs: FC<DialogsType> = ({store}) => {

    const state = store.getState().dialogsPage

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

    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
    store.dispatch(sendMessageAC())
    }
    const onNewMessageChangeHandler =(event:ChangeEvent<HTMLTextAreaElement>)=>{
    let body = event.target.value
        store.dispatch(updateNewMessageAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChangeHandler}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs