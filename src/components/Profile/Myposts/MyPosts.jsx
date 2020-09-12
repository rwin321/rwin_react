import { Field, reduxForm } from "redux-form"
import { maxLength } from "../../../utils/validators/validators"
import Post from "./Post/Post"
import React from "react"
import s from "./MyPosts.module.css"
import { Textarea } from "../../../common/FormsControls/FormsControls"

const maxLength40 = maxLength(40)

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'type your post...'} validate={maxLength40}
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
                <MyPostReduxForm onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
        </div>
    );
});

export default MyPosts;

