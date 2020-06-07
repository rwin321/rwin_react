import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, my name is Ervin', likesCount: 20},
                {id: 2, message: 'It\'s is my 1st post!', likesCount: 11},
                {id: 3, message: 'Business Conference', likesCount: 12},
                {id: 4, message: 'Trip to my sweety', likesCount: 13}
            ],
            newPostText: 'rwin_justwin'
        },
        dialogsPage: {
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
        /*    sideBar: [
                {id: 1, name: 'Ennan'},
                {id: 1, name: 'Akim'},
                {id: 1, name: 'Jimbo'}

            ]*/
    },
    _callSubscriber() {
        console.log('rwin_justwin');
    },

    // getState, subscribe - не меняют наши данные
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // { type: ADD-POST }
    dispatch(action) {
        //Делигировали преобразования веток state -> reudceram
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        //Но callback єто уже responsibility нашего store
        this._callSubscriber(this._state);
}
}
Window.store = store;


export default store;
