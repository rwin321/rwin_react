import {getAuthUserData} from "./auths-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SHOW_GLOBAL_ERROR = 'SHOW_GLOBAL_ERROR';



let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {

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


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS })
export const catchGlobalError = (error) => ({type: SHOW_GLOBAL_ERROR, error })

export const initializeApp = () =>  async(dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}
export const showGlobalError = (error) => async (dispatch) => {
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