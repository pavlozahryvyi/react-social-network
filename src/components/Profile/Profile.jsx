import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    //console.log('---props in Profile ', props);


    return (
        <div className={styles.ProfileContent}>
            <ProfileInfo/>
            <MyPosts
                postData = {props.postData}
                newPostText = {props.newPostText}
                dispatch = {props.dispatch}
            />
        </div>
    );
};

export default Profile;