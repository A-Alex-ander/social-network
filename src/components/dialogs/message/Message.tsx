import React, {useRef} from "react";
import s from './../Dialogs.module.css'


export type MessageType = {
    id: number
    message: string
}


export const Message: React.FC<MessageType> = ({message, id}) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }
    return (
        <div>
            <div className={s.message}></div>
            <textarea ref={newMessageElement}>{message}</textarea>
            <button onClick={addMessage}>+</button>

        </div>
    )
}

export default Message