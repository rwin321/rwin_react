import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Headers/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path={'/profile'}
                           render={() =>
                               <Profile/>}/>
                    <Route path={'/users'}
                           render={() =>
                               <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
