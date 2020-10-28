import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '@material-ui/core';
import './settings.scss'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Settings = (props) => {

    const classes = useStyles();

    return  (
        <div>
            <section className='ervin'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
            </section>
            <form className={classes.root} autoComplete='off'>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Email address</InputLabel>
                    <Input id='my-input' aria-describedby='my-helper-text' />
                    <FormHelperText id='my-helper-text'>We'll not share your email</FormHelperText>
                </FormControl>
                <Input id='filled-basic' color='primary' />
            </form>

        </div>
    )
}





/*
const settingsForm = (props) => {
    return (
        <form onSubmit= { props.handleSubmit }>
            <Field name="firstName" component="input" type="text" />

        </form>
    )
}

const SettingsReduxForm = reduxForm(
    {
        form: 'settings'
    }
)(settingsForm)*/

export default Settings