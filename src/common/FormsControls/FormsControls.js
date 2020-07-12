import React from "react";
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {

    let hasError = touched && error

    return (
        <div className={ touched && error && styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>
                { children }
            </div>
            <div>
                { hasError && <span>{error}</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text='') => {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}
