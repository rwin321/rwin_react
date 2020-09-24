import { Input } from "../../../../common/FormsControls/FormsControls";
import { maxLength } from "../../../../utils/validators/validators";
import React from "react";
import { reduxForm, Field } from "redux-form";

const maxLength20 = maxLength(20)

const StatusForm = ({ onStatusChange, status, deactivateMode }) => {
    return <form>
        <div>
            <Field onChange={ onStatusChange } autoFocus={ true } value = { status }
                   validate={ maxLength20 } name={'status'} onBlur={ deactivateMode }
                   component={ Input } />
        </div>
    </form>
}

const StatusReduxForm = reduxForm({
    // a unique name for the form
    form: 'status'
})(StatusForm)

export default StatusReduxForm