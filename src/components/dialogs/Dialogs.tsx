import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    id:number
    message:string
}

type dialogsDataType = {
    id:number
    name:string
}

type messageDataType = {
    id:number
    message:string
}


const Dialogs = () => {
    let dialogsData:dialogsDataType[] = [
        {id:1,name:'Alexandr'},
        {id:2,name:'Vladislav'},
        {id:3,name:'Dima'},
        {id:4,name:'Efim'},
        {id:5,name:'John'},
    ]

    let messageData:messageDataType[] = [
        {id:1,message:'Hi'},
        {id:2,message:'How are you ?'},
        {id:3,message:'Good'},
        {id:4,message:'Great'},
        {id:5,message:'Badly'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
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


const Message:React.FC<MessageType> = ({message,id}) => {
    return <div className={s.message}>{message}</div>
}
/*Тоже новая версия типизации */
// const Message = ({message}:MessageType):JSX.Element => {
//     return <div className={s.message}>{message}</div>
// }

export default Dialogs