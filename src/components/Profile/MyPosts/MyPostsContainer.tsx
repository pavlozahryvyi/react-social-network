import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {profileActions} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => ({
        postData: state.profilePage.postData
    });

const MyPostsContainer = connect(mapStateToProps, {addPost: profileActions.addPost})(MyPosts);

export default MyPostsContainer;