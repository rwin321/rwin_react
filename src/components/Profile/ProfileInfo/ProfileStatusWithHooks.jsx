import React, {useEffect, useState} from "react";
import s from './ProfileStatusWithHooks.module.css'

const ProfileStatusWithHooks = (props) => {

/*    let stateWithSetState = useState(true)
    debugger
    56+94
    let editMode = stateWithSetState[0]
    let setEditMode = stateWithSetState[1]*/

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    let activateMode = () => {
        setEditMode(true)
    }
    let deactivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profileStatus}>
            {!editMode &&
            <div>
                <b>Status: </b> <span onDoubleClick={activateMode}>{props.status || '---------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateMode}/>
            </div>
            }
        </div>
    )
}

    export default ProfileStatusWithHooks;
