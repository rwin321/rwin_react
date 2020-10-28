import DialogsItem from "./DialogsItem/DialogsItem";
import { maxLength } from "../../utils/validators/validators";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import React from 'react'
import s from './Dialogs.module.css'
import { Textarea } from "../../common/FormsControls/FormsControls";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

// let newMessageElement = React.createRef();
/*    let onMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }
    */

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <span>{dialogsElements}</span>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength100 = maxLength(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={ Textarea }
                   validate={ maxLength100}
                   name={ 'newMessageBody' }
                   placeholder={ 'Enter new message' } />
        </div>
        <div>
            <button className={s.sendMessageBtn}>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs