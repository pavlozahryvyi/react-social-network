import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    console.log("---MyPosts props ", props);

    let postData = props.postData;

    let postElements = postData.map(post => <Post message = {post.message} likes = {post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text); // call BLL func to adding data to state and rerendering UI
        newPostElement.current.value = '';
    };

    return (
        <div className={style.postsBlock}>
            <div className={style.newPostBlock}>
                <h3>New post</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.allPostsBlock}>
                <h3>My posts</h3>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;