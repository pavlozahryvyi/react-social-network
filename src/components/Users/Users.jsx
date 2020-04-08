import React, {Component} from "react";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../../src/assets/img/user2.jpg"

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(resp => {
                this.props.setUsers(resp.data.items)
            })
        ;
    }

    render() {
        return (
            <div className={styles.usersBlock}>
                {this.props.users.map(user => <div key={user.id}>
                    <div><img
                        src={user.photos.small !== null ? user.photos.small : userPhoto}
                        alt="" className={styles.userPhoto}/></div>
                    <div>Name: {user.name}</div>
                    <div>City - {'user.location.city'}</div>
                    <div>Country - {'user.location.country'}</div>
                    {user.followed
                        ? <button onClick={() => this.props.unFollow(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                </div>)}
            </div>
        )
    }
};

export default Users;