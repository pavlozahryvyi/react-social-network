import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../StoreContext";


const NewPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                // call BLL func to adding data to state and rerendering UI
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                return (
                    <NewPost
                        updateNewPostText={onPostChange}
                        addPost={onAddPost}
                        posts={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default NewPostContainer;