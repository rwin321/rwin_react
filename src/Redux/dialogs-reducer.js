const CREATE_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ervin'},
        {id: 2, name: 'Akim'},
        {id: 3, name: 'Veronica'},
        {id: 4, name: 'Greg'},
        {id: 5, name: 'Crage'},
        {id: 6, name: 'Robby'},
        {id: 7, name: 'Ennan'},
        {id: 8, name: 'Jay-Jay'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ervin_just_Win'},
        {id: 3, message: 'React-way-of-Cash'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Crazy'},
        {id: 6, message: 'Brutal'},
        {id: 7, message: 'Savage'},
        {id: 8, message: 'REKT'}
    ],
    newMessageText: 'add_new_message'
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            let newMessage = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messages.push( {id: 9, message: newMessage} )
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;

            
    }
}


export const sendMessageCreator = () => ({type: CREATE_MESSAGE})
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer