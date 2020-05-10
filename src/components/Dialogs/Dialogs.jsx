import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(createMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        //let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text };
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.newMessageText} ref={newMessageElement} onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addNewMessage}>New message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs