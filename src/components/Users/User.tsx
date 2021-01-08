import React from 'react';
import styles from "./user.module.css";
import userPhoto from "../../assets/imgs/user.png";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types/types";

type PropsType = {
    user: any
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({  user, followingInProgress, unFollow, follow }) => {


    return (
        <div className={styles.user}>
            <span>
                <div>
                    <NavLink to={ '/profile/' + user.id }>
                    <img src={ user.photos.small != null ? user.photos.small : userPhoto }
                         className={ styles.userPhoto }/>
                    </NavLink>
                </div>
            </span>
            <span>
                <span>
                    <div>{ user.name }</div>
                    <div><b>status</b>: { user.status || '-------' }</div>
                </span>
                <span>
                    <div>{ 'user.location.city' },</div>
                    <div>{ 'user.location.country' }</div>
                </span>
                <div>
                    {user.followed
                        ? <button className={ styles.followUnfollowBtn }
                                  disabled={ followingInProgress.some(id => id === user.id) } onClick={() => {
                                      unFollow(user.id)
                                }}>
                            unfollow</button>
                        : <button className={ styles.followUnfollowBtn }
                                  disabled={ followingInProgress.some(id => id === user.id) } onClick={() => {
                                      follow(user.id)
                                }}>
                            follow</button>}
                </div>
            </span>
        </div>)
}

export default User;