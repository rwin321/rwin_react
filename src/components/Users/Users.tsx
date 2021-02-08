import React from 'react'
import Paginator from "../../common/Paginator/Paginator"
import User from "./User"
import { UsersType } from "../../types/types"
import s from './user.module.css'

type PropsType = {
    currentPage: number
    follow: (userId: number) => void
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    unFollow: (userId: number) => void
    users: Array<UsersType>
}

const Users: React.FC<PropsType> = ( props ) => {

    const {
        currentPage,
        follow,
        followingInProgress,
        onPageChanged,
        pageSize,
        totalUserCount,
        unFollow,
        users,
    } = props

    return (
        <div className={s.users}>
            <Paginator totalItemsCount={ totalUserCount } pageSize={ pageSize }
                       currentPage={ currentPage } onPageChanged={ onPageChanged }/>
            <div className={s.users__container}>
                {
                    users.map( u => <User key={u.id}
                                          user={u}
                                          followingInProgress={ followingInProgress }
                                          unFollow={ unFollow }
                                          follow={ follow } /> )
                }
            </div>
        </div>
    )
}

export default Users;