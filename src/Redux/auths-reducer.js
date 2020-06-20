import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false
}

const authsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }

}


export const setAuthUserData = (email, login, userId, isAuth) => ({type: SET_USER_DATA, payload: {email, login, userId, isAuth}})

export const getAuthUserData = () =>  (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {email, login, id} = response.data.data;
                dispatch(setAuthUserData(email, login, id, true));
            }
        })
    }
export const login = (email, password, rememberMe) =>  (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
    }

export const logout = () =>  (dispatch) => {
        authAPI.logout()
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }


export default authsReducer