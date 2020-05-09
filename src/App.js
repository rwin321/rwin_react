import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Headers/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={ () =>
                               <Dialogs dialogsPage={props.state.dialogsPage}
                                        dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'}
                           render={ () =>
                               <Profile profilePage={props.state.profilePage}
                                        dispatch={props.dispatch} />}/>
                    <Route path={'/news'} render={ () => <News/>} />
                    <Route path={'/music'} render={ () => <Music/>} />
                    <Route path={'/settings'} render={ () => <Settings/>} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
