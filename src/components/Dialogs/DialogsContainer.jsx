import React from 'react'

import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = () => {


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
}*/



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextCreator(newText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

/*
//Previous version:
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
*/
