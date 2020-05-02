import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import {addPost} from './Redux/state';
import {createMessage} from './Redux/state';

addPost('rwin_just_Win!')
createMessage('rwin')

    ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} createMessage={createMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
