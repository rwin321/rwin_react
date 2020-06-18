import React from 'react'

import {sendMessage} from "../../Redux/dialogs-reducer";
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
//Previous version:
/*let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody))
        }
    }
}*/
//So now we don't use mapDispatchToProps, we use instead just name of our AC in connect func, which automatically making same

export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(Dialogs)

/*
//Previous version:
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
*/
