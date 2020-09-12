import { NavLink } from "react-router-dom"
import React from "react"
import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={s.header}>
        <NavLink to={'/'}>
            <img className= {s.smallLogo}
                 src="https://www.brandcrowd.com/gallery/brands/pictures/picture15389364263661.jpg"
                 alt='Ervin_just_Win'/>
        </NavLink>
      <div className={s.title}>
          <span className={s.titleText}>Find friend</span>
      </div>
      <div className={s.loginBlock}>
              { props.isAuth
                  ? <div className={ s.logout }>
                      <NavLink to={'./'}> {props.login} </NavLink>
                      <button className={s.logoutBtn} onClick={ props.logout }> log out </button> </div>
                  :<NavLink to={'/login'}>login</NavLink> }
      </div>
    </header>
  )
}

export default Header;
