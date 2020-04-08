import React from "react";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../../src/assets/img/user2.jpg"

const Users = ({users, follow, unFollow, setUsers}) => {


    if(users.length === 0){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(resp => {
                debugger;
                /*[
                    {
                        id: 1,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-yKMe8PXZn3heDgmAD-HRS087HqAqgskuUGmkUowtHYiu3niA&usqp=CAU',
                        followed: false,
                        name: 'Pavel',
                        age: 23,
                        location: {city: 'Chernihiv', country: 'Ukraine'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-yKMe8PXZn3heDgmAD-HRS087HqAqgskuUGmkUowtHYiu3niA&usqp=CAU',
                        followed: true,
                        name: 'Zhenya',
                        age: 25,
                        location: {city: 'Kiev', country: 'Ukraine'}
                    },
                    {
                        id: 3,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-yKMe8PXZn3heDgmAD-HRS087HqAqgskuUGmkUowtHYiu3niA&usqp=CAU',
                        followed: true,
                        name: 'Toma',
                        age: 28,
                        location: {city: 'Kharkov', country: 'Ukraine'}
                    }
                ]*/
                setUsers(resp.data.items)
            })
        ;
    }

    return (
        <div className={styles.usersBlock}>
            {users.map(user => <div key={user.id}>
                <div><img
                    src={ user.photos.small !== null ? user.photos.small : userPhoto }
                    alt="" className={styles.userPhoto}/></div>
                <div>Name: {user.name}</div>
                <div>City - {'user.location.city'}</div>
                <div>Coutry - {'user.location.country'}</div>
                {user.followed
                    ? <button onClick={() => unFollow(user.id)}>Unfollow</button>
                    : <button onClick={() => follow(user.id)}>Follow</button>}
            </div>)}
        </div>
    )
};

export default Users;