const CREATE_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const dialogsReducer = (state, action) => {

    switch(action.type) {
        case CREATE_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push( {id: 9, message: newMessage} )
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: CREATE_MESSAGE})
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer