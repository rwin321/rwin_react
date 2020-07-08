import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE';
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO';
const DELETE_POST = 'profile/DELETE_POST';

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
        case SET_PROFILE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} };

        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};

        }
        default:
            return state;
    }

}


export const addPost = (postText) => ({type: ADD_POST, postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfilePhoto = (photos) => ({type: SET_PROFILE_PHOTO, photos})
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.setStatus(userId)
                dispatch(setStatusProfile(response.data));
    }
}
export const savePhoto = (file) => {
    debugger
    return async (dispatch) => {
        let response = await profileAPI.saveProfilePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.data.photos));
        }
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
                // Needed condition to show the status by server:
                if (response.data.resultCode === 0) {
                    dispatch(setStatusProfile(status));
                }
    }
}


export default profileReducer