import React from 'react';
import Profile from './Profile'
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

        //refactored (previous version):
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })*/

    }

    render() {
        console.log('rerender Profiles')
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}


/*
// Previous version(refactored):
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
*/
let mapStateToProps = (state) => {
    console.log('mSTP Profiles')
    return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
}
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

/*
//Previous version:
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)*/

