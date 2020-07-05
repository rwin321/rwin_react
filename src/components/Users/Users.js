import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({pageSize, totalUserCount, currentPage, onPageChanged, ...props}) => {
    return <div>
        <Paginator totalItemsCount={totalUserCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
        {
            props.users.map( u => <User key={u.id}
                                       user={u}
                                       followingInProgress={props.followingInProgress}
                                       unFollow={props.unFollow}
                                       follow={props.follow} /> )
        }
        </div>
    </div>
}

export default Users;