import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <span><img className={s.logoImg} src="https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png" alt="ervin_just_win"/></span>
            <span><NavLink to={path}>{props.name}</NavLink></span>
        </div>
    )
}

export default DialogsItem