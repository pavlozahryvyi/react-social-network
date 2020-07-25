import React, {Component} from "react";
import style from "./NewPost.module.css";
import sendImg from "./../../../../img/add.png"
import {Field, reduxForm} from "redux-form";

const NEW_POST = "newPost";

const NewPostForm = props => {

    return (
        <form onSubmit={props.handleSubmit} className={style.newPostCreationBlock}>
            <div className={style.textareaBlock}>
                <Field className={style.text} component={"textarea"} name={"newPost"} type={"text"} placeholder={"New post"}/>
            </div>
            <div className={style.buttonBlock}>
                <button>
                    <img alt={'send'} src={sendImg}/>
                    <div>Publish</div>
                </button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({form: NEW_POST})(NewPostForm);

class NewPost extends Component{

    render() {

        const onSubmit = data => {
            console.log(data);
            this.props.addPost(data[NEW_POST])
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
                <div>
                    <NewPostReduxForm  onSubmit={onSubmit}/>
                </div>
            </div>
        )
    }
}

export default NewPost;