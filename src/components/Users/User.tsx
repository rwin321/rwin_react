import React from 'react';
import styles from "./user.module.css";
import userPhoto from "../../assets/imgs/user.png";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: any
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div className = {styles.user}>
            <div className={styles.logoSection}>
                <NavLink to = {'/profile/' + user.id}>
                <img
                    src = {user.photos.small != null ? user.photos.small : userPhoto}
                    className = {styles.userPhoto} />
                </NavLink>
            </div>
            <section className={styles.infoSection}>
                <div>
                    <div>{user.name}</div>
                    <div><b>status</b>: {user.status || '-------'}</div>
                </div>
                <div>
                    <div>user country</div>
                    <div>user city</div>
                </div>
                <div className={styles.btnSection}>
                    {user.followed
                        ? <button
                            className = {styles.followUnfollowBtn}
                            disabled = {followingInProgress.some(id => id === user.id)}
                            onClick = {() => {
                                unFollow(user.id)
                            }}>
                            unfollow</button>
                        : <button
                            className = {styles.followUnfollowBtn}
                            disabled = {followingInProgress.some(id => id === user.id)}
                            onClick = {() => {
                                follow(user.id)
                            }}>
                            follow</button>}
                </div>
            </section>
        </div>
    )
}

export default User;