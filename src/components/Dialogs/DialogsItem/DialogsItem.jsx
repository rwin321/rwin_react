import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import cn from 'classnames';

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>
                <img src="https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png" alt="image broken :("/>
            <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogsItem