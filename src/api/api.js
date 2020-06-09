import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '922e1bba-8926-41d2-a376-b64f6a671e2c'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowQuery(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followQuery(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }

}





