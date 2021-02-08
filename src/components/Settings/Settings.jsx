import React, {useState} from 'react'
import s from './Settings.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap//NavDropdown'
import {NavLink} from "react-router-dom";

const Settings = (props) => {

	return (
	    <div>
		    <Navbar bg="light" expand="lg">
			    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
					    <Nav.Link href="#home">Home</Nav.Link>
					    <Nav.Link href="#link">Link</Nav.Link>
					    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
						    <NavDropdown.Item href="/profile">Action</NavDropdown.Item>
						    <NavDropdown.Item><NavLink to='/profile'>profile</NavLink></NavDropdown.Item>
						    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						    <NavDropdown.Divider />
						    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					    </NavDropdown>
				    </Nav>
			    </Navbar.Collapse>
		    </Navbar>
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