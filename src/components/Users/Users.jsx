import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../src/assets/img/usr.png"
import {NavLink} from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../api/api";
import {followThunk} from "../../redux/usersReducer";

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
                        onClick={() => {
                            /*props.toggleFollowingProgress(true, user.id);
                            followAPI.unFollow(user.id)
                                .then(resp => {
                                    if (resp.resultCode === 0) {
                                        props.unFollow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });*/
                            props.unFollowThunk(user.id)

                        }}>Unfollow</button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            /*props.toggleFollowingProgress(true, user.id);
                            followAPI.follow(user.id)
                                .then(resp => {
                                    console.log('---follow resp', resp);
                                    if (resp.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });*/
                            props.followThunk(user.id);
                        }}>Follow</button>}
            </div>)}
        </div>
    )

};

export default Users;