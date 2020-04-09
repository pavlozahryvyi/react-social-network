import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../src/assets/img/user2.jpg"

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersBlock}>
            <div>
                {pages.map((page) => (<span
                    className={`${props.currentPage === page && styles.selectedPage} ${styles.page}`}
                    onClick={(e) => {
                        props.setCurrentPage(page)
                    }}>{page}</span>))}
            </div>
            {props.users.map(user => <div key={user.id}>
                <div><img
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    alt="" className={styles.userPhoto}/></div>
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