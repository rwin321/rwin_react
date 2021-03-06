import React, { useState } from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks"
import userPhoto from "../../../assets/imgs/user.png"
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({profile, ...props}) => {

    const [editMode, setEditMode] = useState(false)


    const onMainProfilePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
            setEditMode(false)
        })
    }

    return !profile ? <Preloader /> : (
        <div className={ s.profileInfoBlock }>
            <img src={ profile.photos.large || userPhoto} className={ s.photoCamera } />
            { props.isOwner &&
            <input type="file" onChange={ onMainProfilePhoto } className={s.uploadPhoto}/>
            }
            <div className={s.profileStatus}>
                <ProfileStatusWithHooks status={ props.status }
                                        updateUserStatus={ props.updateUserStatus }/>
            </div>
            { editMode
                ? <ProfileDataForm initialValues={ profile }
                                   profile={ profile }
                                   onSubmit={ onSubmit } />
                : <ProfileData profile={ profile }
                               isOwner={ props.isOwner }
                               goToEditMode={ () => { setEditMode(true) } } />
            }
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={ s.profileDescp }>

        <div> <b>Full Name</b>:  { profile.fullName } </div>
        <div>
            <b>About me</b>: { profile.aboutMe }
        </div>
        <div>
            <b>Looking for a job</b>: { profile.lookingForAJob ? 'yes' : 'already working' }
        </div>
        { profile.lookingForAJob && <div>
            <b>skills:</b>  { profile.lookingForAJobDescription }
        </div>
        }
        <div>
            <b>Contacts</b>
            <button></button> { Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
        </div>
        <div>
            { isOwner && <button className={ s.profileDataEditBtn } onClick={ goToEditMode }> edit </button> }
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: { contactValue } </div>
}

export default ProfileInfo;
