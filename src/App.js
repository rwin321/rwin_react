import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
        // Previous version (refactored):
        /*authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {email, login, id} = response.data.data;
                    this.props.setAuthUserData(email, login, id);
                }
            })*/
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/dialogs'}
                               render={() =>
                                   <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'}
                               render={() =>
                                   <ProfileContainer/>}/>
                        <Route path={'/users'}
                               render={() =>
                                   <UsersContainer/>}/>
                        <Route path={'/login'}
                               render={() =>
                                   <Login/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
        );
    }
}
let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const ErvinJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default ErvinJSApp



// export default withRouter(connect(null, {getAuthUserData})(App))