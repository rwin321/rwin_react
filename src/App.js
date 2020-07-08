import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import {HashRouter, Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {WithSuspense} from "./hoc/WithSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
                               render={ WithSuspense(DialogsContainer)
                               /*    () => {
                                   return <React.Suspense fallback={ <Preloader /> }>
                                       <DialogsContainer/>
                                   </React.Suspense>
                               }*/
                               } />
                        <Route path={'/profile/:userId?'}
                               render={ WithSuspense(ProfileContainer)
                               /*    () => {
                                   return <React.Suspense fallback={ <Preloader /> }>
                                   <ProfileContainer/>
                               </React.Suspense>}*/
                               }/>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default ErvinJSApp



// export default withRouter(connect(null, {getAuthUserData})(App))