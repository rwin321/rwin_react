import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import setAuthUserData from "./auths-reducer"
import thunkMiddleware  from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
import newsReducer from "./news-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: setAuthUserData,
    form: formReducer,
    app: appReducer,
    news: newsReducer
});

type RootReducerType = typeof rootReducer // (globalState: GlobalState) => GlobalState
export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store;