import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {

    let state = props.store.getState();

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    // call BLL func to adding data to state and rerendering UI
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (
        <NewPost
            updateNewPostText = {onPostChange}
            addPost = {onAddPost}
            posts = {state.profilePage.postData}
            newPostText = {state.profilePage.newPostText}
        />
    );
};

export default NewPostContainer;