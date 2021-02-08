import React from  'react'
import { Field, reduxForm } from "redux-form"
import { createField, Input } from "../../common/FormsControls/FormsControls"
import { required } from "../../utils/validators/validators"
import { connect } from "react-redux"
import { login } from "../../Redux/auths-reducer"
import { Redirect } from "react-router-dom"
import styles from './../../common/FormsControls/FormsControls.module.css'
import './login.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Button } from 'react-bootstrap'

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
                <Field className='field'
                       placeholder={'Email'}
                       validate={[ required ]}
                       name={'email'}
                       component={ Input }/>

                <Field className='field'
                       placeholder = {'password'}
                       validate = {[ required ]}
                       name = {'password'}
                       component = { Input }
                       type = {'password'} />
            <div className='inline'>
                <Field className='field rememberMe'
                       component={ Input }
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            <div className='inline'>
                <button
                    type = "submit"
                    className = 'loginBtn btn btn-outline-dark'
                    >log in
                </button>
            </div>

            { props.captchaUrl && <img src={props.captchaUrl} /> }

            { props.captchaUrl &&
            createField('write secrete code to confirm that ou are a human', 'captcha',
                [required], Input) }

            {
                props.error && <div className={styles.formSummaryError}>
                { props.error }
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

    return <div className='loginWrapper'>
        <div className='login'>
            <h1 className='title'>log In</h1>
            <LoginReduxForm captchaUrl={ props.captchaUrl } onSubmit={ onSubmit }/>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)