import {NavLink} from "react-router-dom"
import React from "react"
import s from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const Header = (props) => {
	return (
		<header className = {s.header}>
			<div>
				<NavLink to = {'/'}>
					<img className = {s.smallLogo}
					     src = "https://www.brandcrowd.com/gallery/brands/pictures/picture15389364263661.jpg"
					     alt = 'Ervin_just_Win' />
				</NavLink>
			</div>
			<div className = {s.title}>
				<span className = {s.titleText}>Find friend</span>
			</div>
			<div className = {s.loginBlock}>
				{
					props.isAuth
						? <div className = {s.logoutBlock}>
							<div>
								<NavLink to = {'./'}
								         className = {s.loginName}> {props.login} </NavLink>
							</div>
							<div>
								<button className = 'btn btn-outline-dark'
								        onClick = {props.logout}>log out
								</button>
							</div>
						</div>
						: <div className = {s.loginNameContainer}>
							<NavLink to = {'/login'}>login</NavLink>
						</div>
				}
			</div>
		</header>
	)
}

export default Header
