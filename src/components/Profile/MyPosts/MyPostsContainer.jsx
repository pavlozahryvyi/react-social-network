import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () =>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;