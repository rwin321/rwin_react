import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {Redirect} from "react-router-dom";



const Profile = (props) => {
    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />

        </div>
    );
};



export default Profile;

