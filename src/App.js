import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./components/News/NewsContainer";
import Music from "./components/Music/Music";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp, showGlobalError } from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./Redux/redux-store";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = () => {
    console.log("Some Error");
  };

  //Initializing app
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className="app-wrapper-content container" id="navbar__menu">
          <React.Suspense fallback={<Preloader />}>
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => <Redirect to={"/profile"} />}
              />
              <Route path={"/dialogs"} render={() => <DialogsContainer />} />
              <Route
                path={"/profile/:userId?"}
                render={() => <ProfileContainer />}
              />
              <Route path={"/users"} render={() => <UsersContainer />} />
              <Route path={"/login"} render={() => <Login />} />
              <Route path={"/news"} render={() => <NewsContainer />} />
              {/* <Route path={"/music"} render={() => <Music />} /> */}
              <Route path={"/settings"} render={() => <Settings />} />
              <Route path={"*"} render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, showGlobalError })
)(App);

const ErvinJSApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default ErvinJSApp;
