import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

export type InitialStateType = {
    email: string | null,
    login: string | null,
    userId: number | null,
    isAuth: boolean,
    captchaUrl: string | null
}


let initialState: InitialStateType = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    captchaUrl: null // if captchaUrl null -> no need to show captcha
}

const authsReducer = (state = initialState, action: any) => {

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

type SetAuthUserDataPayload = {
    email: string | null,
    login: string | null,
    userId: number | null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayload
}
export const setAuthUserData = (email: string | null, login: string | null, userId: number | null, isAuth: boolean): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: {email, login, userId, isAuth }})

type getCaptchaActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captchaUrl: string }
}
export const getAuthCaptchaUrlSuccess = (captchaUrl: string): getCaptchaActionType => ({ type: GET_CAPTCHA_URL, payload: {captchaUrl} })

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getAuthCaptchaUrlSuccess(captchaUrl));
}

export const getAuthUserData = () => async (dispatch: any) => {
        const response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {email, login, id} = response.data.data;
                dispatch(setAuthUserData(email, login, id, true));
            }
    }
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>  async (dispatch: any) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else { if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
    }

export const logout = () => async (dispatch: any) => {
        const response = await authAPI.logout()
                //console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }


export default authsReducer