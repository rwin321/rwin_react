import React from 'react'

import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;

            let onMessageClick = () => {
               store.dispatch(sendMessageCreator())
            }
            let onMessageChange = (newText) => {
               store.dispatch(updateNewMessageTextCreator(newText))
            }

            return <Dialogs
                updateNewMessageText={onMessageChange}
                sendMessageCreator={onMessageClick}
                dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer