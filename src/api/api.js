import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "506264c7-e08d-447a-ae53-bbc91bc9de7d"
    }
});

export const authAPI = {
    me(){
        return instance
            .get(`auth/me`)
            .then(resp => resp.data);
    }
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            })
            .then(resp => resp.data);
    },

    unFollow(userId){
        return instance
            .delete(`follow/${userId}`)
            .then(resp => resp.data);
    },

    follow(userId){
        return instance
            .post(`follow/${userId}`)
            .then(resp => resp.data);
    },

    getProfile(userId){
        return instance
            .get(`profile/${userId}`)
            .then(resp => resp.data)
    }
};

