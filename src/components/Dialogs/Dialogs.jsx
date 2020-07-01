import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

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

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

let maxLength100 = maxLength(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength100]} name={'newMessageBody'} placeholder={'Enter new message'} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs