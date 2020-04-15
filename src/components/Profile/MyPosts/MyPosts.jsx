import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    let postElements = props.postData.map(post => <Post key={post.id} message={post.message} likes={post.likesCount}/>);

    return (
        <div className={style.postsBlock}>

            <NewPost
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
                newPostText={props.newPostText}

            />

            <div>
                <h3>My posts</h3>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;