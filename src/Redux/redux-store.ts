import appReducer from "./app-reducer"
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import newsReducer from "./news-reducer"
import profileReducer from "./profile-reducer"
import { reducer as formReducer } from 'redux-form'
import setAuthUserData from "./auths-reducer"
import sidebarReducer from "./sidebar-reducer"
import thunkMiddleware  from "redux-thunk"
import usersReducer from "./users-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: setAuthUserData,
    form: formReducer,
    app: appReducer,
    news: newsReducer
})

type RootReducerType = typeof rootReducer // (globalState: GlobalState) => GlobalState
export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store