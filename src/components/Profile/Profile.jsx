import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./Myposts/MyPostsContainer"

const Profile = (props) => {
    debugger
    return (
        <div>
                <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner}
                profile={props.profile} status={props.status}
                updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile}
                />
                {
                (() => {
                    if (props.profile != null) {
                        return <MyPostsContainer/>
                    }
                })()
                }
        </div>
    )
}

export default Profile;

