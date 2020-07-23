import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
            <span><img className={s.logoImg} src="https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png" alt="image broken :("/></span>
            <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogsItem