import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/imgs/user.png'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.sideBarFriendTitle}>
                <div className={s.sideBarFriendTitleName}>FRIENDS</div>
            </div>
            <div className={s.sideBarFriendContent}>
                <div className={s.sideBarFriendLogo}>
                    <img className={s.imgFriend} src={userPhoto}/>
                    <img className={s.imgFriend} src={userPhoto}/>
                    <img className={s.imgFriend} src={userPhoto}/>
                </div>
                <div className={s.sideBarFriendName}>
                    <span className={s.tabName}>Akim</span>
                    <span className={s.tabName}>Ennan</span>
                    <span className={s.tabName}>Emirali</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
