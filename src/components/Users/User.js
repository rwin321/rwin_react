import React from 'react';
import styles from "./user.module.css";
import userPhoto from "../../assets/imgs/user.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unFollow, follow}) => {
    return (
            <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unFollow(user.id)
                                }}>
                                    unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>
                                    follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'},</div>
                            <div>{'user.location.country'}</div>
                        </span>
                </span>
            </div>)
}

export default User;