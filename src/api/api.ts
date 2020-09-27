import axios from "axios";

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
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

export enum CodeResults {
    Success = 0,
    Error = 1,
    captchaIsRequired = 10

}

type MeResponseDataType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: CodeResults,
    message: Array<string>
}
type loginDataType = {
    data: {
        userId: number
    },
    resultCode: CodeResults,
    messages: Array<string>
}


export const authAPI = {
    me() {
        return instance
            .get<MeResponseDataType>(`auth/me`)
            .then( res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<loginDataType>(`auth/login`, {email, password, rememberMe, captcha})
            .then( res => res.data )
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    setStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    saveProfilePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileInfo(profile: any) {
        return instance.put('profile', profile)
    }
}


// const query = () => instance.get<MeResponseDataType>(`auh/me`).then( res => res.data.data.login.toLowerCase() )