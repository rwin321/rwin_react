import {NavLink} from "react-router-dom"
import React from "react"
import s from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import ff_logo from '../../assets/imgs/ff_logo.png'

const Header = ({login, logout, isAuth}) => {
	return (
		<header className = {s.header}>
			<section>
				<NavLink to = {'/'}>
					<img className = {s.smallLogo}
					     src = {ff_logo}
					     alt = 'Ervin_just_Win' />
				</NavLink>
			</section>
			<h2 className = {s.title}>
				<span className = {s.titleText}>Find friend</span>
			</h2>
			<aside className = {s.loginBlock}>
				{
					isAuth
						? <div className = {s.logoutBlock}>
							<div>
								<NavLink to = {'./'}
								         className = {s.loginName}> {login} </NavLink>
							</div>
							<div>
								<button className = 'btn btn-outline-dark'
								        onClick = {logout}>log out
								</button>
							</div>
						</div>
						: <div className = {s.loginNameContainer}>
							<NavLink to = {'/login'}>login</NavLink>
						</div>
				}
			</aside>
		</header>
	)
}

export default Header
