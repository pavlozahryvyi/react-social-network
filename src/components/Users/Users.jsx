import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../src/assets/img/user2.jpg"
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                        disabled={props.followingInProgress.some( id => id === user.id)}
                        onClick={() => {
                            props.toggleFollowingProgress(true, user.id);
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "506264c7-e08d-447a-ae53-bbc91bc9de7d"
                                    }
                                })
                                .then(resp => {
                                    if (resp.data.resultCode === 0) {
                                        props.unFollow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });

                        }}>Unfollow</button>
                    : <button
                        disabled={props.followingInProgress.some( id => id === user.id)}
                        onClick={() => {
                            props.toggleFollowingProgress(true, user.id);
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "506264c7-e08d-447a-ae53-bbc91bc9de7d"
                                    }
                                })
                                .then(resp => {
                                    console.log('---follow resp', resp);
                                    if (resp.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });


                        }}>Follow</button>}
            </div>)}
        </div>
    )

};

export default Users;