import React from "react";
import style from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";
import sendImg from "./../../../../img/add.png"


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
            <p>Welcome! You can add
                <span className={style.boldText}> a new post</span> and
                <span className={style.boldText}> a new message</span> now!</p>
            <p>
                Click "Add post" button or write your text and click the button to add a new post ;)
            </p>
            <div className={style.newPostCreationBlock}>
                <div className={style.textareaBlock}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div className={style.buttonBlock}>
                    <button onClick={addPost}><img alt={'send'} src={sendImg}/><div>Add post</div></button>
                </div>
            </div>
        </div>
    );
};

export default NewPost;