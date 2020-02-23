import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    //console.log("---NewPost props ", props);

    let postData = props.postData;

    let postElements = postData.map(post => <Post message={post.message} likes={post.likesCount}/>);



    return (
        <div className={style.postsBlock}>
            <NewPost
                newPostText={props.newPostText}
                dispatch = {props.dispatch}
            />
            <div>
                <h3>My posts</h3>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;