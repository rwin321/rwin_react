import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setPreloader(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
            })
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
            />
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
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

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setPreloader})(UsersAPIComponent);