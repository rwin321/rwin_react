import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://sun9-19.userapi.com/c850620/v850620966/1bc2b1/bOXxCEb7FTg.jpg?ava=1',
                    followed: false, fullName: 'Ervin', status: 'boss', location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 1, photoUrl: 'https://sun9-19.userapi.com/c850620/v850620966/1bc2b1/bOXxCEb7FTg.jpg?ava=1',
                    followed: true, fullName: 'Bob', status: 'team-lead', location: {city: 'Paris', country: 'France'}
                },
                {
                    id: 1, photoUrl: 'https://sun9-19.userapi.com/c850620/v850620966/1bc2b1/bOXxCEb7FTg.jpg?ava=1',
                    followed: false, fullName: 'Travor', status: 'jokerman', location: {city: 'Washington', country: 'USA'}
                }
            ]
        )
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;