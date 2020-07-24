const CREATE_MESSAGE = 'dialogs/CREATE-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ervin'},
        {id: 2, name: 'Akim'},
        {id: 3, name: 'Veronica'},
        {id: 4, name: 'Emirali'},
        {id: 5, name: 'Crage'},
        {id: 6, name: 'Ennan'},
        {id: 7, name: 'Daniel'},
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
            /*let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            let newMessage = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messages.push( {id: 9, message: newMessage} )
            return stateCopy;*/
        }
        default:
            return state;

            
    }
}


export const sendMessage = (newMessageBody) => ({type: CREATE_MESSAGE, newMessageBody})


export default dialogsReducer