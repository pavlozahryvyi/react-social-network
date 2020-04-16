import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../src/assets/img/user2.jpg"
import {NavLink} from "react-router-dom";

const Users = (props) => {


    return (
        <div>

            {props.users.map(user => <div key={user.id}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : userPhoto}
                            alt="" className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>Name: {user.name}</div>
                <div>City - {'user.location.city'}</div>
                <div>Country - {'user.location.country'}</div>
                {user.followed
                    ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
            </div>)}
        </div>
    )

};

export default Users;