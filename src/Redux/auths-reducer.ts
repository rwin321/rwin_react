import { AppStateType } from "./redux-store"
import { authAPI,
    CodeResults,
    securityAPI } from "../api/api"
import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

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

const authsReducer = (state = initialState, action: ActionTypes) => {

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

type ActionTypes = SetAuthUserDataActionType | getCaptchaActionType

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
export const setAuthUserData = (email: string | null,
                                login: string | null,
                                userId: number | null,
                                isAuth: boolean): SetAuthUserDataActionType =>
    ({ type: SET_USER_DATA, payload: { email, login, userId, isAuth }})

type getCaptchaActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captchaUrl: string }
}
export const getAuthCaptchaUrlSuccess = (captchaUrl: string): getCaptchaActionType => ({
    type: GET_CAPTCHA_URL,
    payload: { captchaUrl }
})

type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getCaptchaUrl = (): ThunkType  => async (dispatch)=> {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getAuthCaptchaUrlSuccess(captchaUrl));
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
        const meData = await authAPI.me()
            if (meData.resultCode === CodeResults.Success) {
                let { email, login, id } = meData.data;
                dispatch(setAuthUserData(email, login, id, true));
            }
    }

export const login = (email: string,
                      password: string,
                      rememberMe: boolean,
                      captcha: string) =>
    async (dispatch: any) => {
        const loginData = await authAPI.login(email, password, rememberMe, captcha)
            if (loginData.resultCode === CodeResults.Success) {
                dispatch(getAuthUserData())
            } else {
                if (loginData.resultCode === CodeResults.captchaIsRequired) {
                    dispatch(getCaptchaUrl())
                }
                let messages = loginData.messages.length > 0
                    ? loginData.messages[0]
                    : 'Some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
    }

export const logout = (): ThunkType => async (dispatch) => {
        const response = await authAPI.logout()
                //console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(
                    null,
                    null,
                    null,
                    false
                ))
            }
    }


export default authsReducer