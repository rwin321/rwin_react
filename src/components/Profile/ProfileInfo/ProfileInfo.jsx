import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div>
            {/*<div>
                    <img className={s.profileImg}
                         src="https://www.solidbackgrounds.com/images/website/950x534/950x534-blue-abstract-noise-free-website-background-image.jpg" alt='Ervin'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.profileStatus}>
            <ProfileStatus status={'rwin_justWin'}/>
            </div>
            <div className={s.profileDescp}>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Contacts: {props.profile.contacts.facebook || 'no information'}</div>
                <div>Job status: {props.profile.lookingForAJob ? 'in progress' : 'working'}</div>
            </div>

        </div>
    );
};

export default ProfileInfo;
