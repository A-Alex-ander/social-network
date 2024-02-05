import React from "react";
import s from './Dialogs.module.css'
const Dialogs = ()=>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>Alexandr</div>
                <div className={s.dialog}>Vladislav</div>
                <div className={s.dialog}>Nikita</div>
                <div className={s.dialog}>Efim</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you ?</div>
                <div className={s.message}>Good</div>
            </div>

        </div>
    )
}

export default Dialogs