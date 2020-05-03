import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {

    return (
        <div className={s.messagesContent}>
            <div className={s.message}>{props.message}</div>
            <div></div>
        </div>
)
}

export default Message