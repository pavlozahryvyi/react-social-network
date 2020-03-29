import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    console.log('---props in Profile ', props);


    return (
        <div className={styles.ProfileContent}>
            <ProfileInfo/>
            <MyPosts
                store = {props.store}
            />
        </div>
    );
};

export default Profile;