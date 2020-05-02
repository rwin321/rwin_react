import {rerenderEntireTree} from "../Render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, my name is Ervin', likesCount: 20},
            {id: 2, message: 'It\'s is my 1st post!', likesCount: 11},
            {id: 3, message: 'Business Conference', likesCount: 12},
            {id: 4, message: 'Trip to my sweety', likesCount: 13}
        ]
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
        ]
    },
/*    sideBar: [
        {id: 1, name: 'Ennan'},
        {id: 1, name: 'Akim'},
        {id: 1, name: 'Jimbo'}
    ]*/
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let createMessage = (messageText) => {
    let newMessage = {
        id: 9,
        message: messageText
    };
    state.dialogsPage.messages.push(newMessage);
}

export default state