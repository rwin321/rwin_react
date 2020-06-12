import React from 'react';
import Profile from './Profile'
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        //refactored (previous version):
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })*/

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

