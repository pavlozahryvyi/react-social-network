import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";
import StoreContext from "../../../StoreContext";


const MyPosts = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let postData = store.getState().profilePage.postData;

                    let postElements = postData.map(post => <Post message={post.message} likes={post.likesCount}/>);

                    return (<div className={style.postsBlock}>
                        <NewPostContainer store={store}/>
                        <div>
                            <h3>My posts</h3>
                            {postElements}
                        </div>
                    </div>)
                }

            }
        </StoreContext.Consumer>
    );
};

export default MyPosts;