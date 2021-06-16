import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Settings.module.css'

const Settings = () => {

	return (
	    <section>
			<ul className={s.navMenu}>
				<li className={s.navMenu__item}>
					<NavLink className={s.navMenu__itemLink} to='/settings'>
						<span>Profile</span>
					</NavLink>
				</li>
				<li className={s.navMenu__item}>
					<NavLink className={s.navMenu__itemLink} to='/settings'>
						<span>Сonfidentiality</span>
					</NavLink>
				</li>
				<li className={s.navMenu__item}>
					<NavLink className={s.navMenu__itemLink} to='/settings'>
						<span>Access</span>
					</NavLink>
				</li>
				<li className={s.navMenu__item}>
					<NavLink className={s.navMenu__itemLink} to='/settings'>
						<span>Preferences</span>
					</NavLink>
				</li>
				<li className={s.navMenu__item}>
					<NavLink className={s.navMenu__itemLink} to='/settings'>
						<span>Advanced options</span>
					</NavLink>
				</li>
			</ul>
        </section>
	)
}

export default Settings