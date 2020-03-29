import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";


const MyPosts = (props) => {

    console.log("---MyPosts props ", props.store.getState());

    let postData = props.store.getState().profilePage.postData;

    let postElements = postData.map(post => <Post message={post.message} likes={post.likesCount}/>);

    return (
        <div className={style.postsBlock}>
            <NewPostContainer store = {props.store}/>
            <div>
                <h3>My posts</h3>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;