import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    id: number
    name: string
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




export default DialogItem