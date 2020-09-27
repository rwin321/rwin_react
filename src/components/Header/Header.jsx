import { NavLink } from "react-router-dom"
import React from "react"
import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={ s.header }>
        <NavLink to={'/'}>
            <img className= { s.smallLogo }
                 src="https://www.brandcrowd.com/gallery/brands/pictures/picture15389364263661.jpg"
                 alt='Ervin_just_Win'/>
        </NavLink>
        <div className={s.hoverLogoTitle}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName = { s.active }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName = { s.active }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName = { s.active }>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName = { s.active }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={ s.active }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={ s.active }>Settings</NavLink>
            </div>
        </div>
        <div className={ s.title }>
            <span className={ s.titleText }>Find friend</span>
        </div>
         <div className={s.smallTitle} >
            <span className={s.smallTitleText}>Ff</span>
        </div>
      <div className = { s.loginBlock }>
              {
                  props.isAuth
                  ? <div className = { s.logoutBlock }>
                      <div className={s.loginName}>
                          <NavLink to = {'./'}> { props.login } </NavLink>
                      </div>
                      <button className = { s.logoutBtn }
                              onClick = { props.logout }> log out </button>
                  </div>
                  : <NavLink to= {'/login'}>login</NavLink>
              }
      </div>
    </header>
  )
}

export default Header
