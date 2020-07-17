import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    captchaUrl: null // if captchaUrl null -> no need to show captcha
}

const authsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (email, login, userId, isAuth) => ({ type: SET_USER_DATA, payload: {email, login, userId, isAuth }})
export const getAuthCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL, payload: {captchaUrl} })

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getAuthCaptchaUrlSuccess(captchaUrl));
}

export const getAuthUserData = () => async (dispatch) => {
        const response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {email, login, id} = response.data.data;
                dispatch(setAuthUserData(email, login, id, true));
            }
    }
export const login = (email, password, rememberMe, captcha = null) =>  async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
    }

export const logout = () => async (dispatch) => {
        const response = await authAPI.logout()
                //console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }


export default authsReducer