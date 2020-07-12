import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";

const ProfileDataForm = ({profile, ...props}) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
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
    </form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profileData'
})(ProfileDataForm)

export default ProfileDataReduxForm

