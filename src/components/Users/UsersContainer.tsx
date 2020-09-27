import React from 'react'
import { connect } from "react-redux"
import Users from "./Users"

import {
    follow,
    requestUsers,
    unFollow
} from "../../Redux/users-reducer"

import Preloader from "../../common/Preloader/Preloader"
import { compose } from "redux"

import {
    getCurrentPageS,
    getFollowingInProgressS,
    getIsFetchingS,
    getPageSizeS,
    getTotalUserCountS,
    getUsersS
} from "../../Redux/users-selectors"

import { UsersType } from "../../types/types"
import { AppStateType } from "../../Redux/redux-store"

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalUserCount: number
    isFetching: boolean
    followingInProgress: Array<number>
    users: Array<UsersType>
}
type MapDispatchPropsType = {
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
}
type OwnPropsType = {
    fakeString: string
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        //refactored api query according with getUsersThunkCreator; this how it was:
        /*        this.props.setPreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })*/
    }

    onPageChanged = ( pageNumber: number ) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            < Users totalUserCount={ this.props.totalUserCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    onPageChanged={ this.onPageChanged }
                    users={ this.props.users }
                    follow={ this.props.follow }
                    unFollow={ this.props.unFollow }
                    followingInProgress={ this.props.followingInProgress }
            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        currentPage: getCurrentPageS(state),
        isFetching: getIsFetchingS(state),
        followingInProgress: getFollowingInProgressS(state),
        pageSize: getPageSizeS(state),
        totalUserCount: getTotalUserCountS(state),
        users: getUsersS(state)
    }
}
//Previous version (now it work same, but redux making this by itself)
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setPreloader: (isFetching) => {
            dispatch(setPreloaderAC(isFetching))
        }


    }
}*/

export default compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {follow, unFollow, getUsers: requestUsers} )
    //WithAuthRedirect
)(UsersContainer)

/*
//Previous version:
let withAuthRedirectUsersContainer = WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toogleFollowingProgress, getUsers})(withAuthRedirectUsersContainer);*/
