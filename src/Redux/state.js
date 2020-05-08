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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('rwin_justwin');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    createMessage() {

        let newMessage = {
            id: 9,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

export default store
window.store = store;