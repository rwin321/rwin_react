import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers,
    setCurrentPage,toogleFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //refactored api query according with getUsersThunkCreator; this how it was:
        /*        this.props.setPreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })*/
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            < Users totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage, toogleFollowingProgress, getUsers: requestUsers})
    //WithAuthRedirect
)(UsersContainer)

/*
//Previous version:
let withAuthRedirectUsersContainer = WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toogleFollowingProgress, getUsers})(withAuthRedirectUsersContainer);*/
