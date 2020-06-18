import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount}/> );


    let addNewPost = (values) => {
        props.addPost(values.postText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={addNewPost}/>
                <div className={s.posts}>
                    { postsElements }
                </div>
            </div>
        </div>
    );
};

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'postText'} name={'postText'} component={'textarea'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

const MyPostReduxForm = reduxForm({
    form: 'addPost'
})(MyPostsForm)


export default MyPosts;

