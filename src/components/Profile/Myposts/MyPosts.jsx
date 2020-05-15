import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount}/> );

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} ref={newPostElement} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
                <div className={s.posts}>
                    { postsElements }
                </div>
            </div>
        </div>
    );
};


export default MyPosts;

