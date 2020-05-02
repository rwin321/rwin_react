import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {addPost} from "./Redux/state";
import {createMessage} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} createMessage={createMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

export default rerenderEntireTree