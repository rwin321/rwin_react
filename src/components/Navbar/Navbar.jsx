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
                <div className={s.sideBarFriendTitleName}>
                    <span>FRIENDS</span>
                </div>
            </div>
            <div className={s.sideBarFriendContent}>
                <div className={s.sideBarFriendLogo}>
                    <NavLink to={'/dialogs/1'}>
                        <img className={s.imgFriend} src={userPhoto}/>
                    </NavLink>
                    <NavLink to={'/dialogs/2'}>
                        <img className={s.imgFriend} src={userPhoto}/>
                    </NavLink>
                    <NavLink to={'/dialogs/3'}>
                        <img className={s.imgFriend} src={userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.sideBarFriendName}>
                    <NavLink to={'/dialogs/1'}>
                        <span>Akim</span>
                    </NavLink>
                    <NavLink to={'/dialogs/2'}>
                        <span>Ennan</span>
                    </NavLink>
                    <NavLink to={'/dialogs/3'}>
                        <span>Emirali</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
