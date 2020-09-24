import React, { useEffect, useState } from "react"
import s from './ProfileStatusWithHooks.module.css'
import StatusReduxForm from "./StatusForm"

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={ s.profileStatus }>
            { !editMode &&
                <div className={ s.span }>
                    <b>Status</b>:
                    <span onDoubleClick={ activateMode }>{ props.status || '---------' }</span>
                </div>
            }
            { editMode &&
                <div className={s.input}>
                    <StatusReduxForm onStatusChange={ onStatusChange }
                                     deactivateMode={ deactivateMode }
                                     status={ status } />
                    { /*<input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateMode}/>*/ }
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
