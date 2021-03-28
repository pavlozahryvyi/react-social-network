import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPostForm";
import {PostElementType} from "../../../types/types";

type PropsType = {
    postData: Array<PostElementType>
    addPost: (text: string) => void
}

const MyPosts: React.FC<PropsType> = ({
                     postData,
                     addPost
                 }) => {

    const postElements = [...postData]
        .reverse().map(post => <Post key={post.id} message={post.message} likes={post.likesCount}/>);

    return (
        <div className={style.postsBlock}>

            <NewPost
                addPost={addPost}

            />

            <div>
                <h3>My posts</h3>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;