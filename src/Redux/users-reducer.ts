import { usersAPI } from "../api/api"
import { objMappingArr } from "../utils/objectHelpers"
import { UsersType } from './../types/types'
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'users/TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'users/TOOGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users id
}
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users: objMappingArr(state.users, action.userId, 'id', {followed: true})
                /*state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objMappingArr(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}

type ActionsTypes = FollowSuccesType | UnFollowSuccesType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | SetPreloaderType | ToogleFollowingProgressType

type FollowSuccesType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSucces = (userId: number): FollowSuccesType => ({type: FOLLOW, userId})

type UnFollowSuccesType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unFollowSucces = (userId:number): UnFollowSuccesType => ({type: UNFOLLOW, userId})

type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: SET_USERS, users})

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setTotalUsersCount = (totalUserCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUserCount})

type SetPreloaderType = {
    type: typeof TOOGLE_IS_FETCHING,
    isFetching: boolean
}
export const setPreloader = (isFetching: boolean): SetPreloaderType => ({type: TOOGLE_IS_FETCHING, isFetching})

type ToogleFollowingProgressType = {
    type: typeof TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toogleFollowingProgress = (isFetching: boolean, userId: number): ToogleFollowingProgressType => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState: GetStateType)  => {

        dispatch(setPreloader(true))
        dispatch(setCurrentPage(page))

        const data = await usersAPI.getUsers(page, pageSize)
            dispatch(setPreloader(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => FollowSuccesType | UnFollowSuccesType ) => {
        dispatch(toogleFollowingProgress(true, userId))
        const response = await apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toogleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSucces)
    }
}
export const unFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSucces)
    }
}

export default usersReducer