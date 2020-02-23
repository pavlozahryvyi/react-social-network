import React from "react";
import style from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //console.log('--- NewPost.jsx ', text);
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    // call BLL func to adding data to state and rerendering UI
    let addPost = () => {
        props.dispatch(addPostActionCreator());
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