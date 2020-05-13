import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageText = state.newMessageText;

    // let newMessageElement = React.createRef();

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='Enter new message'
                              value={newMessageText}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={onMessageClick}>New message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs