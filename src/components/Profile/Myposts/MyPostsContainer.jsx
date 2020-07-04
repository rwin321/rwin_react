import React from "react";
import {addPost} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = () =>
{

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
};*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
//Previous version, no needn't to do. React making automatically
/*const mapDispatchToProps = (dispatch) => {
    return {
        /!*updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },*!/
        addPost: (postText) => {
        dispatch(addPostActionCreator(postText));
    }
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);


export default MyPostsContainer;

