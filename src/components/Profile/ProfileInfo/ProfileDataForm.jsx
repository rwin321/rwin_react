import React from "react";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import styles from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, error, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {
            error && <div className={styles.formSummaryError}>
                {error}
            </div>
        }
        <b>Full Name</b>: {createField('Full name', 'fullName', [], Input)}
        <div>
            <b>About me:</b> {createField('About me', 'aboutMe', [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}> {createField(key, 'contacts.' +  key, [], Input)} </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profileData'
})(ProfileDataForm)

export default ProfileDataReduxForm

