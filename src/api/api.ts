import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "506264c7-e08d-447a-ae53-bbc91bc9de7d"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>,
}

type LoginResponseType = {
    data: {
        id: number
    },
    resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum,
    messages: Array<string>,
}

export const authAPI = {
    me() {
        return instance
            .get<MeResponseType>(`auth/me`)
            .then(resp => resp.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<LoginResponseType>(`/auth/login`, {email, password, rememberMe, captcha})
            .then(resp => resp.data);
    },
    logOut() {
        return instance
            .delete(`/auth/login`)
            .then(resp => resp.data);
    }
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            })
            .then(resp => resp.data);
    },

    unFollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(resp => resp.data);
    },

    follow(userId: number) {
        return instance
            .post(`follow/${userId}`)
            .then(resp => resp.data);
    },

    getProfile(userId: number) {
        console.warn("Use profileAPI obj!");
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {

    getProfile(userId: number) {
        return instance
            .get(`profile/${userId}`)
            .then(resp => resp.data)
    },

    getStatus(userId: number) {
        return instance
            .get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {status})
    },

    updatePhoto(photo: File) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
    },

    updateProfileData(data: ProfileType) {
        return instance
            .put(`profile`, data)
    }
};

export const securityAPI = {
    getCaptcha() {
        return instance
            .get('/security/get-captcha-url')
    }
};

