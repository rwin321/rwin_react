import React from "react";
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error

    return (
        <div className={ meta.touched && meta.error && styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>
                { props.children }
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
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
