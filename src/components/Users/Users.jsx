import React from "react";
import styles from "./Users.module.css"

const Users = ({users, follow, unFollow, setUsers}) => {


    if(users.length === 0){
        setUsers([
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
        ]);
    }

    return (
        <div className={styles.usersBlock}>
            {users.map(user => <div key={user.id}>
                <div><img src={user.photoUrl} alt="" className={styles.userPhoto}/></div>
                <div>{user.name}</div>
                <div>City - {user.location.city}, coutry - {user.location.country}</div>
                {user.followed
                    ? <button onClick={() => unFollow(user.id)}>Unfollow</button>
                    : <button onClick={() => follow(user.id)}>Follow</button>}
            </div>)}
        </div>
    )
};

export default Users;