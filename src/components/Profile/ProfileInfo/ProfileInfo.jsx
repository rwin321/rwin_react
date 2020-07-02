import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/imgs/user.png";

const ProfileInfo = ({profile, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}/>
            </div>
            <div className={s.profileStatus}>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div className={s.profileDescp}>
                <div>About me: {profile.aboutMe}</div>
                <div>Contacts: {profile.contacts.facebook || 'no information'}</div>
                <div>Job status: {profile.lookingForAJob ? 'in progress' : 'working'}</div>
            </div>

        </div>
    );
};

export default ProfileInfo;
