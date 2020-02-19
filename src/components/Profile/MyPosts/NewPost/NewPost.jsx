import React from "react";
import style from "../MyPosts.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text);
        props.updateNewPostText(text);
    };

    let addPost = () => {
        props.addPost(); // call BLL func to adding data to state and rerendering UI
    };

    return (
        <div className={style.newPostBlock}>
            <h3>New post</h3>
            <p>Welcome! You can add a new post now!</p>
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
    );
};

export default NewPost;