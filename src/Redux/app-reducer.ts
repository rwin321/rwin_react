import {getAuthUserData} from "./auths-reducer";


const INITIALIZED_SUCCESS: string = 'INITIALIZED_SUCCESS';
const SHOW_GLOBAL_ERROR: string = 'SHOW_GLOBAL_ERROR';

let initialState = {
    initialized: false as boolean,
    globalError: null as string | null
}
export type initialStateType = typeof initialState;

const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        case SHOW_GLOBAL_ERROR: {
            return {
                ...state,
                globalError: action.error
            };
        }
        default:
            return state;
    }

}

type InitializedSuccesActionType = {
    type: typeof INITIALIZED_SUCCESS // 'INITIALIZED_SUCCESS'
}
export const initializedSuccess = (): InitializedSuccesActionType => ({type: INITIALIZED_SUCCESS })
type CatchGlobalErrorType = {
    type: typeof SHOW_GLOBAL_ERROR,
    error: string | null
}
export const catchGlobalError = (error: string | null): CatchGlobalErrorType => ({type: SHOW_GLOBAL_ERROR, error })

export const initializeApp = () =>  async(dispatch: any) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}
export const showGlobalError = (error: string | null) => async (dispatch: any) => {
    await dispatch(catchGlobalError(error))
    setTimeout(dispatch(catchGlobalError(null)) , 1000)

}
/*
export const initializeApp = () =>  (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })

}
*/

export default appReducer