import {rerenderEntireTree} from "../Render";


let state = {
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
}

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let createMessage = () => {

    let newMessage = {
        id: 9,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export default state