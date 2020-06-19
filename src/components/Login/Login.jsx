import React from  'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} validate={[required]} name={'login'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'}validate={[required]} name={'password'} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} validate={[required]} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Log In</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login