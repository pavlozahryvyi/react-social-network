import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "506264c7-e08d-447a-ae53-bbc91bc9de7d"
    }
});

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
            .then(resp => resp.data);
    },

    login(email, password, rememberMe = false){
        return instance
            .post(`/auth/login`, {email, password, rememberMe})
            .then(resp => resp.data);
    },
    logOut(){
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

    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(resp => resp.data);
    },

    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(resp => resp.data);
    },

    getProfile(userId) {
        console.warn("Use profileAPI obj!");
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(resp => resp.data)
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
    },

    updateStatus(status){
        return instance
            .put(`profile/status`, {status})
    },

    updatePhoto(photo){
        const formData = new FormData();
        formData.append("image", photo);
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
    },

    updateProfileData(data) {
        return instance
            .put(`profile`, data)
    }
};

export const securityAPI = {
    getCaptcha(){
        return instance
            .get('/security/get-captcha-url')
    }
};

