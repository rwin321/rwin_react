import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

/*    let stateWithSetState = useState(true)
    debugger
    let editMode = stateWithSetState[0]
    let setEditMode = stateWithSetState[1]*/

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

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
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>status: {props.status || '---------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateMode}/>
            </div>
            }
        </>
    )
}

    export default ProfileStatusWithHooks;
