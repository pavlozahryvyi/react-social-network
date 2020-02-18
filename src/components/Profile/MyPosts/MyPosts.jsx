import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    //console.log("---MyPosts props ", props);

    let postData = props.postData;

    let postElements = postData.map(post => <Post message = {post.message} likes = {post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(); // call BLL func to adding data to state and rerendering UI
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text);
        props.updateNewPostText(text);
    };

    return (
        <div className={style.postsBlock}>
            <div className={style.newPostBlock}>
                <h3>New post</h3>
                <p>Welcome to the updated app! You can add a new post now</p>
                <p>
                    Click "Add post" button or write your text and click the button to add a new post
                    <span> *CSS will be soon</span> ;)
                </p>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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