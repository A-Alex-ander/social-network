import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to={"/dialogs/1"}>Alexandr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/2"}>Vladislav</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/3"}>Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/4"}>Efim</NavLink>
                </div>

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