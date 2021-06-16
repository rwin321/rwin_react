import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import userPhoto from '../../assets/imgs/user.png'

const Navbar = () => {
    return (
        <div className={s.nav}>
            <ul >
                <li className={s.item}>
                    <NavLink to='/profile' activeClassName = { s.active }>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' activeClassName = { s.active }>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/users' activeClassName = { s.active }>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' activeClassName = { s.active }>News</NavLink>
                </li>
                {/* <li className={s.item}>
                    <NavLink to='/music' activeClassName={ s.active }>Music</NavLink>
                </li> */}
                <li className={s.item}>
                    <NavLink to='/settings' activeClassName={ s.active }>Settings</NavLink>
                </li>
            </ul>
            <div className={s.sideBarFriendContent}>
                <div className={s.sideBarTitle}>FRIENDS</div>
                <div className={s.sideBarItems}>
                    <NavLink to={'/dialogs'}>
                        <img className={s.sideBarItem} src={userPhoto}/>
                    </NavLink>
                    <NavLink to={'/dialogs'}>
                        <img className={s.sideBarItem} src={userPhoto}/>
                    </NavLink>
                    <NavLink to={'/dialogs'}>
                        <img className={s.sideBarItem} src={userPhoto}/>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default Navbar