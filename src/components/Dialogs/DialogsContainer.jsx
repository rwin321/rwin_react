import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (newText) => {
        props.store.dispatch(updateNewMessageTextCreator(newText))
    }

    return (<Dialogs
        updateNewMessageText={onMessageChange}
        sendMessageCreator={onMessageClick}
        dialogsPage={state} />)
}

export default DialogsContainer