import { profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"
import { PhotosType, PostsItemsType, ProfileType } from "../types/types"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "./redux-store"

const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO'
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'

const initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Ervin', likesCount: 20 },
        { id: 2, message: 'I\'m working for my new project', likesCount: 11 },
        { id: 3, message: 'Don\'t hurry up, it\' just slows you', likesCount: 12 },
        { id: 4, message: 'To get succeed, first you must learn how to fail', likesCount: 13 }
    ] as Array<PostsItemsType>,
    profile: null as ProfileType | null,
    status: ''
}
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            return stateCopy
        }
        case DELETE_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts = stateCopy.posts.filter(post => post.id !== action.postId)
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }
        case SET_PROFILE_PHOTO: {
            return {...state, profile: {...state.profile as ProfileType, photos: action.photos as PhotosType} }
        }
        default:
            return state;
    }
}

type ActionsTypes = AddPostType | SetUserProfileType | SetProfilePhotoType | SetStatusType | DeletePostType

type AddPostType = {
    type: typeof ADD_POST,
    postText: string
}
export const addPost = (postText: string): AddPostType => ({type: ADD_POST, postText})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetProfilePhotoType = {
    type: typeof SET_PROFILE_PHOTO, photos: PhotosType
}
export const setProfilePhoto = (photos: PhotosType): SetProfilePhotoType => ({type: SET_PROFILE_PHOTO, photos})

type SetStatusType = {
    type: typeof SET_STATUS_PROFILE, status: string
}
export const setStatusProfile = (status: string): SetStatusType => ({type: SET_STATUS_PROFILE, status})

type DeletePostType = {
    type: typeof DELETE_POST, postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.setStatus(userId)
        dispatch(setStatusProfile(response.data))
    }
}
export const savePhoto = (file: any): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.saveProfilePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.data.photos))
        }
    }
}
export const saveProfile = (profile: ProfileType): ThunkType =>
    async (dispatch: any, getState) => {
        const response = await profileAPI.saveProfileInfo(profile)
        const userId = getState().auth.userId
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            // dispatch(stopSubmit('edit-profileData', {'contacts': {'facebook': response.data.messages[0] }}))
            dispatch(stopSubmit('edit-profileData', {_error: response.data.messages[0] }))
            return Promise.reject({_error: response.data.messages[0] })
        }
}

export const updateUserStatus = (status: string): ThunkType =>
    async (dispatch) => {
        try { const response = await profileAPI.updateStatus(status)
                // Needed condition to show the status by server:
                if (response.data.resultCode === 0) {
                    dispatch(setStatusProfile(status))
                }
        }
        catch(error) {
            //Some action that we must to implement for some errors
            alert('Update Status Error')
        }
}

export default profileReducer