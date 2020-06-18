import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, my name is Ervin', likesCount: 20},
        {id: 2, message: 'It\'s is my 1st post!', likesCount: 11},
        {id: 3, message: 'Business Conference', likesCount: 12},
        {id: 4, message: 'Trip to my sweety', likesCount: 13}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};

        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status};

        }
        default:
            return state;
    }

}


export const addPost = (postText) => ({type: ADD_POST, postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.setStatus(userId)
            .then(response => {
            dispatch(setStatusProfile(response.data));
        });
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
            // Needed condition to show the status by server:
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status));
            }
        });
    }
}


export default profileReducer