import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../src/assets/img/usr.png"
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
                    ? <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {props.unFollowThunk(user.id)}}>Unfollow</button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {props.followThunk(user.id);}}>Follow</button>}
            </div>)}
        </div>
    )

};

export default Users;