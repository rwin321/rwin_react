import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/> );

    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id}/> );

    let newMessageElement = React.createRef();

    let writeMessage = () => {
        let text = newMessageElement.current.value;
        props.createMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={writeMessage}>New message</button>
            </div>
        </div>
    )
}

export default Dialogs