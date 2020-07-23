import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10)

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'postText'} validate={[required, maxLength10]}
                       name={'postText'} component={Textarea}/>
            </div>
            <div>
                <button className={s.addPostBtn}>add post</button>
            </div>
        </form>
    );
};

const MyPostReduxForm = reduxForm({
    form: 'addPost'
})(MyPostsForm)


const MyPosts = React.memo(props => {

    const postsElements = props.posts.map(p => <Post deletePost={props.deletePost} key={p.id} message={p.message} likeCount={p.likesCount} post={p}/> );

    const addNewPost = (values) => {
        props.addPost(values.postText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
});



export default MyPosts;

