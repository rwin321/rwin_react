import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {addPost, createMessage, updateNewMessageText, updateNewPostText} from "./Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 createMessage={createMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
