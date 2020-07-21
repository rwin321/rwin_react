import React from  'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auths-reducer";
import {Redirect} from "react-router-dom";
import styles from './../../common/FormsControls/FormsControls.module.css'
import s from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} validate={[required]} name={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'}validate={[required]} name={'password'} component={Input} type={'password'}/>
            </div>
            <div className={s.inline}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div className={s.inline}>
                <button className={s.loginBtn}>Login</button>
            </div>

            { props.captchaUrl && <img src={props.captchaUrl} /> }

            { props.captchaUrl && createField('write secrete code to confirm that ou are a human', 'captcha', [required], Input) }

            {
                props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.login}>
        <h1>Log In</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)