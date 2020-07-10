import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/imgs/user.png";
import {Field} from "redux-form";

const ProfileInfo = ({profile, ...props}) => {

    let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }

    const onMainProfilePhoto = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
    }
    }

    return (
        <div className={s.profileInfoBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
            </div>
            { props.isOwner && <input type={'file'} onChange={onMainProfilePhoto} className={s.inputFile} /> }
            <div className={s.profileStatus}>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            { editMode
                ? <ProfileDataForm profile={profile}/>
                : <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} />
            }
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.profileDescp}>
        <div>
            { isOwner && <button onClick={goToEditMode}> edit </button> }
        </div>
        <div> <b>Full Name</b>:  {profile.fullName}</div>
        <div>
            <b>About me:</b>  {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'already working'}
        </div>
        { profile.lookingForAJob && <div> <b>skills:</b>  {profile.lookingForAJobDescription }</div> }
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
        </div>
    </div>

}

const ProfileDataForm = ({profile, ...props}) => {
    return <div>
            form
        </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;
