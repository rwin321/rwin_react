import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={s.header}>
      <img className='smallLogo' src="https://www.brandcrowd.com/gallery/brands/pictures/picture15389364263661.jpg" alt='Ervin_just_Win'/>
      <div className={s.loginBlock}>
              { props.isAuth ? props.login
                  :<NavLink to={'/login'}>login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
